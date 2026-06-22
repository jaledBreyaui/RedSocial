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
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Comment } from '../../models/comment';
import { Post } from '../../models/post';
import { CommentsService } from '../../services/comments';
import { PostsService } from '../../services/posts';
import { CrearComentario } from '../crearcomentario/crearcomentario';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CrearComentario, ConfirmDialogModule],
  providers: [ConfirmationService],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit {
  @Input({ required: true }) post!: Post;
  readonly currentUserId = input.required<string>();
  readonly navegable = input(true);
  @Output() commentCreated = new EventEmitter<Comment>();
  @Output() postDeleted = new EventEmitter<string>();

  readonly likes = signal<string[]>([]);
  readonly liked = computed(() => this.likes().includes(this.currentUserId()));
  readonly likesCount = computed(() => this.likes().length);
  readonly comments = signal<Comment[]>([]);
  readonly commentsCount = computed(() => this.comments().length);
  readonly actualizandoLike = signal(false);
  readonly eliminando = signal(false);
  readonly isOwnPost = computed(
    () => this.post.author._id === this.currentUserId(),
  );

  constructor(
    private readonly postsService: PostsService,
    private readonly commentsService: CommentsService,
    private readonly router: Router,
    private readonly confirmationService: ConfirmationService,
  ) {}

  ngOnInit(): void {
    this.likes.set(this.post.likes);
    this.commentsService.obtenerPorPost(this.post._id).subscribe({
      next: (comments) => this.comments.set(comments),
      error: () => this.comments.set([]),
    });
  }

  comentarioCreado(comment: Comment): void {
    this.comments.update((comments) => [...comments, comment]);
    this.commentCreated.emit(comment);
  }

  abrirDetalle(): void {
    if (!this.navegable()) return;
    void this.router.navigate(['/posts', this.post._id]);
  }

  detenerNavegacion(event: Event): void {
    event.stopPropagation();
  }

  eliminarPost(event: Event): void {
    this.detenerNavegacion(event);

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

  get authorInitials(): string {
    const name = this.post.author.name?.trim().charAt(0) ?? '';
    const lastName = this.post.author.lastName?.trim().charAt(0) ?? '';

    return `${name}${lastName}`.toUpperCase() || 'NS';
  }

  get username(): string {
    return `@${this.post.author.email.split('@')[0]}`;
  }

  get createdAtLabel(): string {
    const createdAt = new Date(this.post.createdAt);

    if (Number.isNaN(createdAt.getTime())) {
      return '';
    }

    const elapsedMinutes = Math.max(
      0,
      Math.floor((Date.now() - createdAt.getTime()) / 60000),
    );

    if (elapsedMinutes < 1) return 'ahora';
    if (elapsedMinutes < 60) return `${elapsedMinutes} min`;

    const elapsedHours = Math.floor(elapsedMinutes / 60);
    if (elapsedHours < 24) return `${elapsedHours} h`;

    const elapsedDays = Math.floor(elapsedHours / 24);
    if (elapsedDays < 30) return `${elapsedDays} d`;

    const elapsedMonths = Math.floor(elapsedDays / 30);
    if (elapsedMonths < 12) return `${elapsedMonths} mes`;

    return `${Math.floor(elapsedMonths / 12)} a`;
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
}
