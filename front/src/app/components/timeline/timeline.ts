import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Navbar } from '../navbar/navbar';
import { PostsService } from '../../services/posts';
import { Post } from '../../models/post';
import { Posts } from '../posts/posts';
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

  constructor(private postService: PostsService) {}

  ngOnInit(): void {
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
}
