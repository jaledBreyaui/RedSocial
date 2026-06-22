import { HttpErrorResponse } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { forkJoin, map, of, switchMap } from 'rxjs';
import { Comment } from '../../models/comment';
import { Post, PostAuthor } from '../../models/post';
import { CommentsService } from '../../services/comments';
import { PostsService } from '../../services/posts';
import { UsersService } from '../../services/users';
import { CommentComponent } from '../comment/comment';
import { Navbar } from '../navbar/navbar';
import { Posts } from '../posts/posts';

interface ProfilePost {
  post: Post;
  comments: Comment[];
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [Navbar, Posts, CommentComponent],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  readonly user = signal<PostAuthor | undefined>(undefined);
  readonly recentPosts = signal<ProfilePost[]>([]);
  readonly cargando = signal(true);
  readonly error = signal('');

  constructor(
    private readonly usersService: UsersService,
    private readonly postsService: PostsService,
    private readonly commentsService: CommentsService,
  ) {
    this.cargarPerfil();
  }

  get avatarUrl(): string | undefined {
    return this.user()?.avatarURL;
  }

  get initials(): string {
    const user = this.user();
    if (!user) return 'NS';

    return `${user.name.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase();
  }

  get username(): string {
    const user = this.user();
    return user ? `@${user.email.split('@')[0]}` : '';
  }

  comentarioCreado(profilePost: ProfilePost, comment: Comment): void {
    this.recentPosts.update((items) =>
      items.map((item) =>
        item.post._id === profilePost.post._id
          ? { ...item, comments: [...item.comments, comment] }
          : item,
      ),
    );
  }

  postEliminado(id: string): void {
    this.recentPosts.update((items) =>
      items.filter((item) => item.post._id !== id),
    );
  }

  private cargarPerfil(): void {
    this.usersService
      .obtenerActual()
      .pipe(
        switchMap((user) => {
          this.user.set(user);

          return this.postsService.obtenerTodos().pipe(
            map((posts) =>
              posts
                .filter((post) => post.author._id === user._id)
                .sort(
                  (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime(),
                )
                .slice(0, 3),
            ),
            switchMap((posts) => {
              if (posts.length === 0) {
                return of<ProfilePost[]>([]);
              }

              return forkJoin(
                posts.map((post) =>
                  this.commentsService
                    .obtenerPorPost(post._id)
                    .pipe(map((comments) => ({ post, comments }))),
                ),
              );
            }),
          );
        }),
      )
      .subscribe({
        next: (posts) => {
          this.recentPosts.set(posts);
          this.cargando.set(false);
        },
        error: (error: HttpErrorResponse) => {
          this.error.set(
            error.status === 401
              ? 'Tu sesión no es válida. Volvé a iniciar sesión.'
              : 'No pudimos cargar tu perfil.',
          );
          this.cargando.set(false);
        },
      });
  }
}
