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
  private readonly postsPorPagina = 10;

  readonly posts = signal<Post[]>([]);
  readonly ordenActual = signal<'recent' | 'likes'>('recent');
  readonly cargando = signal(true);
  readonly cargandoMas = signal(false);
  readonly error = signal('');
  readonly errorCargaMas = signal('');
  readonly paginaActual = signal(1);
  readonly hayMasPosts = signal(false);
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

    this.cargarPosts();
  }

  cargarMasPosts(): void {
    if (this.cargandoMas() || !this.hayMasPosts()) {
      return;
    }

    this.cargarPosts(this.paginaActual() + 1);
  }

  alternarOrden(): void {
    const nuevoOrden = this.ordenActual() === 'recent' ? 'likes' : 'recent';
    this.ordenActual.set(nuevoOrden);
    this.cargarPosts();
  }

  postEliminado(id: string): void {
    this.posts.update((posts) => posts.filter((post) => post._id !== id));
  }

  postActualizado(postActualizado: Post): void {
    this.posts.update((posts) =>
      posts.map((post) =>
        post._id === postActualizado._id ? postActualizado : post,
      ),
    );
  }

  agregarPostCreado(post: Post): void {
    if (this.ordenActual() === 'likes') {
      this.cargarPosts();
      return;
    }

    this.posts.update((posts) => [post, ...posts]);
  }

  private cargarPosts(page = 1): void {
    const esPrimeraPagina = page === 1;

    if (esPrimeraPagina) {
      this.cargando.set(true);
      this.error.set('');
    } else {
      this.cargandoMas.set(true);
      this.errorCargaMas.set('');
    }

    this.postService
      .obtenerTodos(page, this.postsPorPagina, this.ordenActual())
      .subscribe({
        next: (response) => {
          this.posts.update((posts) =>
            esPrimeraPagina ? response.data : [...posts, ...response.data],
          );
          this.paginaActual.set(response.page);
          this.hayMasPosts.set(response.hasMore);
          this.cargando.set(false);
          this.cargandoMas.set(false);
        },
        error: (error: HttpErrorResponse) => {
          const mensaje =
            error.status === 401
              ? 'Tu sesion no es valida. Cerra sesion y volve a ingresar.'
              : 'No pudimos cargar las publicaciones.';

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
