import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Post } from '../../models/post';
import { CrearPost } from '../crearpost/crearpost';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ButtonModule, CrearPost],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Output() postCreado = new EventEmitter<Post>();
  @ViewChild(CrearPost) crearPost!: CrearPost;

  constructor(private readonly router: Router) {}

  cerrarSesion(): void {
    localStorage.removeItem('accessToken');
    void this.router.navigate(['/inicio']);
  }

  abrirCrearPost(): void {
    this.crearPost.abrir();
  }
}
