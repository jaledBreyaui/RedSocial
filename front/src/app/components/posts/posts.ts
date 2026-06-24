import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MenuModule } from 'primeng/menu';
import { AutofocusDirective } from '../../directives/autofocus.directive';
import { Comment } from '../../models/comment';
import { Post } from '../../models/post';
import { InicialesUsuarioPipe } from '../../pipes/iniciales-usuario.pipe';
import { TiempoRelativoPipe } from '../../pipes/tiempo-relativo.pipe';
import { UsuarioHandlePipe } from '../../pipes/usuario-handle.pipe';
import { CommentsService } from '../../services/comments';
import { PostsService } from '../../services/posts';
import { CrearComentario } from '../crearcomentario/crearcomentario';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    CrearComentario,
    ConfirmDialogModule,
    FormsModule,
    MenuModule,
    InicialesUsuarioPipe,
    TiempoRelativoPipe,
    UsuarioHandlePipe,
    AutofocusDirective,
  ],
  providers: [ConfirmationService],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit {
  @Input({ required: true }) post!: Post;
  readonly currentUserId = input.required<string>();
  readonly currentUserRole = input<'user' | 'admin'>('user');
  readonly navegable = input(true);
  @Output() commentCreated = new EventEmitter<Comment>();
  @Output() postDeleted = new EventEmitter<string>();
  @Output() postUpdated = new EventEmitter<Post>();

  readonly likes = signal<string[]>([]);
  readonly liked = computed(() => this.likes().includes(this.currentUserId()));
  readonly likesCount = computed(() => this.likes().length);
  readonly comments = signal<Comment[]>([]);
  readonly commentsTotal = signal(0);
  readonly commentsCount = computed(() => this.commentsTotal());
  readonly actualizandoLike = signal(false);
  readonly eliminando = signal(false);
  readonly editando = signal(false);
  readonly guardandoEdicion = signal(false);
  readonly errorEdicion = signal('');
  readonly avatarFallido = signal(false);
  contenidoEditado = '';
  readonly isOwnPost = computed(
    () =>
      this.post.author._id === this.currentUserId() ||
      this.currentUserRole() === 'admin',
  );
  constructor(
    private readonly postsService: PostsService,
    private readonly commentsService: CommentsService,
    private readonly router: Router,
    private readonly confirmationService: ConfirmationService,
  ) {}

  get accionesPost(): MenuItem[] {
    return [
      {
        label: 'Modificar',
        icon: 'pi pi-pencil',
        disabled: this.editando() || this.eliminando(),
        command: () => this.iniciarEdicion(),
      },
      {
        label: 'Eliminar',
        icon: 'pi pi-trash',
        disabled: this.eliminando() || this.guardandoEdicion(),
        styleClass: 'danger-menu-item',
        command: () => this.eliminarPost(),
      },
    ];
  }

  ngOnInit(): void {
    this.likes.set(this.post.likes);
    this.commentsService.obtenerPorPost(this.post._id).subscribe({
      next: (response) => {
        this.comments.set(response.data);
        this.commentsTotal.set(response.total);
      },
      error: () => {
        this.comments.set([]);
        this.commentsTotal.set(0);
      },
    });
  }

  comentarioCreado(comment: Comment): void {
    this.comments.update((comments) => [comment, ...comments]);
    this.commentsTotal.update((total) => total + 1);
    this.commentCreated.emit(comment);
  }

  iniciarEdicion(event?: Event): void {
    if (event) {
      this.detenerNavegacion(event);
    }

    if (!this.isOwnPost()) {
      return;
    }

    this.contenidoEditado = this.post.content;
    this.errorEdicion.set('');
    this.editando.set(true);
  }

  cancelarEdicion(event: Event): void {
    this.detenerNavegacion(event);

    if (this.guardandoEdicion()) {
      return;
    }

    this.contenidoEditado = '';
    this.errorEdicion.set('');
    this.editando.set(false);
  }

  guardarEdicion(event: Event): void {
    this.detenerNavegacion(event);

    const content = this.contenidoEditado.trim();

    if (!content || content.length < 2) {
      this.errorEdicion.set('El contenido debe tener al menos 2 caracteres.');
      return;
    }

    if (content === this.post.content.trim()) {
      this.editando.set(false);
      return;
    }

    this.guardandoEdicion.set(true);
    this.errorEdicion.set('');

    this.postsService.actualizar(this.post._id, content).subscribe({
      next: (post) => {
        this.post = post;
        this.postUpdated.emit(post);
        this.editando.set(false);
        this.guardandoEdicion.set(false);
      },
      error: () => {
        this.errorEdicion.set('No pudimos editar la publicacion.');
        this.guardandoEdicion.set(false);
      },
    });
  }

  abrirDetalle(): void {
    if (!this.navegable()) return;
    void this.router.navigate(['/posts', this.post._id]);
  }

  detenerNavegacion(event: Event): void {
    event.stopPropagation();
  }

  eliminarPost(event?: Event): void {
    if (event) {
      this.detenerNavegacion(event);
    }

    if (!this.isOwnPost() || this.eliminando()) {
      return;
    }

    this.confirmationService.confirm({
      header: 'Eliminar publicación',
      message: 'Esta acción no se puede deshacer.',
      acceptLabel: 'Eliminar',
      rejectLabel: 'Cancelar',
      accept: () => this.confirmarEliminacion(),
    });
  }

  private confirmarEliminacion(): void {
    this.eliminando.set(true);

    this.postsService.eliminar(this.post._id).subscribe({
      next: ({ deletedId }) => {
        this.postDeleted.emit(deletedId);
      },
      error: () => {
        this.eliminando.set(false);
      },
    });
  }

  toggleLike(): void {
    if (this.actualizandoLike()) {
      return;
    }

    this.actualizandoLike.set(true);

    this.postsService.toggleLike(this.post._id).subscribe({
      next: ({ likes }) => {
        this.likes.set(likes);
        this.actualizandoLike.set(false);
      },
      error: () => {
        this.actualizandoLike.set(false);
      },
    });
  }

  get avatarUrl(): string | undefined {
    return this.postsService.obtenerUrlImagen(this.post.author.avatarURL);
  }

  get imageUrl(): string | undefined {
    return this.postsService.obtenerUrlImagen(this.post.imageURL);
  }

  get createdAtExactLabel(): string {
    const createdAt = new Date(this.post.createdAt);

    if (Number.isNaN(createdAt.getTime())) {
      return '';
    }

    return new Intl.DateTimeFormat('es-AR', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'America/Argentina/Buenos_Aires',
    }).format(createdAt);
  }

  editado(): boolean {
    if (!this.post.updatedAt) {
      return false;
    }

    const createdAt = new Date(this.post.createdAt).getTime();
    const updatedAt = new Date(this.post.updatedAt).getTime();

    return (
      !Number.isNaN(createdAt) &&
      !Number.isNaN(updatedAt) &&
      updatedAt - createdAt > 1000
    );
  }
}
