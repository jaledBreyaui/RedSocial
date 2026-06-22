import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Navbar } from '../navbar/navbar';
import { PostsService } from '../../services/posts';
import { Post } from '../../models/post';
import { Posts } from '../posts/posts';
import { UsersService } from '../../services/users';
@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [Navbar, ButtonModule, Posts],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
})
export class Timeline implements OnInit {
  readonly posts = signal<Post[]>([]);
  readonly cargando = signal(true);
  readonly error = signal('');
  readonly currentUserId = signal('');
  readonly currentUserRole = signal<'user' | 'admin'>('user');

  constructor(
    private postService: PostsService,
    private usersService: UsersService,
  ) {}

  ngOnInit(): void {
    this.usersService.obtenerActual().subscribe({
      next: (user) => {
        this.currentUserId.set(user._id);
        this.currentUserRole.set(user.role ?? 'user');
      },
    });

    this.postService.obtenerTodos().subscribe({
      next: (posts) => {
        this.posts.set(posts);
        this.cargando.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.cargando.set(false);
        this.error.set(
          error.status === 401
            ? 'Tu sesión no es válida. Cerrá sesión y volvé a ingresar.'
            : 'No pudimos cargar las publicaciones.',
        );
      },
    });
  }

  postEliminado(id: string): void {
    this.posts.update((posts) => posts.filter((post) => post._id !== id));
  }

  agregarPostCreado(post: Post): void {
    this.posts.update((posts) => [post, ...posts]);
  }
}
