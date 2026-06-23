import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from '../../models/comment';
import { Post } from '../../models/post';
import { CommentsService } from '../../services/comments';
import { PostsService } from '../../services/posts';
import { UsersService } from '../../services/users';
import { CommentComponent } from '../comment/comment';
import { Navbar } from '../navbar/navbar';
import { Posts } from '../posts/posts';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [Navbar, Posts, CommentComponent],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css',
})
export class PostDetail implements OnInit {
  private readonly commentsPorPagina = 4;
  private postId = '';

  readonly post = signal<Post | undefined>(undefined);
  readonly comments = signal<Comment[]>([]);
  readonly currentUserId = signal('');
  readonly currentUserRole = signal<'user' | 'admin'>('user');
  readonly cargando = signal(true);
  readonly cargandoMas = signal(false);
  readonly error = signal('');
  readonly errorCargaMas = signal('');
  readonly paginaActual = signal(1);
  readonly hayMasComments = signal(false);
  readonly commentsTotal = signal(0);

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly postsService: PostsService,
    private readonly commentsService: CommentsService,
    private readonly usersService: UsersService,
  ) {}

  ngOnInit(): void {
    this.usersService.obtenerActual().subscribe({
      next: (user) => {
        this.currentUserId.set(user._id);
        this.currentUserRole.set(user.role ?? 'user');
      },
    });

    const postId = this.route.snapshot.paramMap.get('id');

    if (!postId) {
      this.error.set('La publicacion no es valida.');
      this.cargando.set(false);
      return;
    }

    this.postId = postId;

    this.postsService.obtenerPorId(postId).subscribe({
      next: ({ post }) => {
        this.post.set(post);
        this.cargarComments();
      },
      error: (error: HttpErrorResponse) => {
        this.error.set(
          error.status === 404
            ? 'La publicacion no existe.'
            : 'No pudimos cargar la publicacion.',
        );
        this.cargando.set(false);
      },
    });
  }

  volver(): void {
    void this.router.navigate(['/timeline']);
  }

  comentarioCreado(comment: Comment): void {
    this.comments.update((comments) => [comment, ...comments]);
    this.commentsTotal.update((total) => total + 1);
  }

  comentarioActualizado(commentActualizado: Comment): void {
    this.comments.update((comments) =>
      comments.map((comment) =>
        comment._id === commentActualizado._id ? commentActualizado : comment,
      ),
    );
  }

  postActualizado(postActualizado: Post): void {
    this.post.set(postActualizado);
  }

  postEliminado(): void {
    void this.router.navigate(['/timeline']);
  }

  cargarMasComments(): void {
    if (this.cargandoMas() || !this.hayMasComments()) {
      return;
    }

    this.cargarComments(this.paginaActual() + 1);
  }

  private cargarComments(page = 1): void {
    const esPrimeraPagina = page === 1;

    if (esPrimeraPagina) {
      this.cargando.set(true);
      this.error.set('');
    } else {
      this.cargandoMas.set(true);
      this.errorCargaMas.set('');
    }

    this.commentsService
      .obtenerPorPost(this.postId, page, this.commentsPorPagina)
      .subscribe({
        next: (response) => {
          this.comments.update((comments) =>
            esPrimeraPagina ? response.data : [...comments, ...response.data],
          );
          this.commentsService.guardarEnCache(
            this.postId,
            response,
            response.page,
            response.limit,
          );
          this.paginaActual.set(response.page);
          this.hayMasComments.set(response.hasMore);
          this.commentsTotal.set(response.total);
          this.cargando.set(false);
          this.cargandoMas.set(false);
        },
        error: () => {
          const mensaje = 'No pudimos cargar los comentarios.';

          if (esPrimeraPagina) {
            this.error.set(mensaje);
          } else {
            this.errorCargaMas.set(mensaje);
          }

          this.cargando.set(false);
          this.cargandoMas.set(false);
        },
      });
  }
}
