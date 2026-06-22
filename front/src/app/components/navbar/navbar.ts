import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  signal,
  ViewChild,
} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Post } from '../../models/post';
import { UsersService } from '../../services/users';
import { CrearPost } from '../crearpost/crearpost';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ButtonModule, CrearPost],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  @Output() postCreado = new EventEmitter<Post>();
  @ViewChild(CrearPost) crearPost!: CrearPost;

  readonly isAdmin = signal(false);

  constructor(
    private readonly router: Router,
    private readonly usersService: UsersService,
  ) {}

  ngOnInit(): void {
    this.usersService.obtenerActual().subscribe({
      next: (user) => this.isAdmin.set(user.role === 'admin'),
      error: () => this.isAdmin.set(false),
    });
  }

  cerrarSesion(): void {
    localStorage.removeItem('accessToken');
    void this.router.navigate(['/inicio']);
  }

  abrirCrearPost(): void {
    this.crearPost.abrir();
  }
}
