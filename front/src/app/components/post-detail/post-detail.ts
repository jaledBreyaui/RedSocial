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
  readonly post = signal<Post | undefined>(undefined);
  readonly comments = signal<Comment[]>([]);
  readonly currentUserId = signal('');
  readonly currentUserRole = signal<'user' | 'admin'>('user');
  readonly cargando = signal(true);
  readonly error = signal('');

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
      this.error.set('La publicación no es válida.');
      this.cargando.set(false);
      return;
    }

    this.postsService.obtenerPorId(postId).subscribe({
      next: ({ post, comments }) => {
        this.post.set(post);
        this.comments.set(comments);
        this.commentsService.guardarEnCache(postId, comments);
        this.cargando.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.error.set(
          error.status === 404
            ? 'La publicación no existe.'
            : 'No pudimos cargar la publicación.',
        );
        this.cargando.set(false);
      },
    });
  }

  volver(): void {
    void this.router.navigate(['/timeline']);
  }

  comentarioCreado(comment: Comment): void {
    this.comments.update((comments) => [...comments, comment]);
  }

  postEliminado(): void {
    void this.router.navigate(['/timeline']);
  }
}
