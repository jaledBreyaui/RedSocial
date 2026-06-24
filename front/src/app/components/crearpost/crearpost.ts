import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  inject,
  OnDestroy,
  Output,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TextareaModule } from 'primeng/textarea';
import { AutofocusDirective } from '../../directives/autofocus.directive';
import { BrokenImageDirective } from '../../directives/broken-image.directive';
import { LimitCounterDirective } from '../../directives/limit-counter.directive';
import { Post } from '../../models/post';
import { InicialesUsuarioPipe } from '../../pipes/iniciales-usuario.pipe';
import { PostsService } from '../../services/posts';
import { UsersService } from '../../services/users';

@Component({
  selector: 'app-crearpost',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DialogModule,
    TextareaModule,
    ButtonModule,
    InicialesUsuarioPipe,
    AutofocusDirective,
    LimitCounterDirective,
    BrokenImageDirective,
  ],
  templateUrl: './crearpost.html',
  styleUrl: './crearpost.css',
})
export class CrearPost implements OnDestroy {
  private readonly fb = inject(FormBuilder);
  private readonly postsService = inject(PostsService);
  private readonly usersService = inject(UsersService);

  @Output() postCreado = new EventEmitter<Post>();

  readonly visible = signal(false);
  readonly publicando = signal(false);
  readonly error = signal('');
  readonly imagenPreview = signal<string | undefined>(undefined);
  readonly usuarioActual = signal<Post['author'] | undefined>(undefined);
  readonly avatarFallido = signal(false);

  imagen?: File;

  readonly formulario = this.fb.nonNullable.group({
    content: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
  });

  abrir(): void {
    this.error.set('');
    this.avatarFallido.set(false);
    this.visible.set(true);

    if (!this.usuarioActual()) {
      this.usersService.obtenerActual().subscribe({
        next: (user) => this.usuarioActual.set(user),
        error: () => {
          this.error.set('No pudimos cargar los datos de tu perfil.');
        },
      });
    }
  }

  get avatarUrl(): string | undefined {
    return this.usuarioActual()?.avatarURL;
  }

  cerrar(): void {
    if (this.publicando()) return;
    this.visible.set(false);
    this.limpiar();
  }

  seleccionarImagen(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    this.liberarPreview();
    this.imagen = file;
    this.imagenPreview.set(URL.createObjectURL(file));
    input.value = '';
  }

  quitarImagen(): void {
    this.imagen = undefined;
    this.liberarPreview();
  }

  publicar(): void {
    if (this.formulario.invalid || this.publicando()) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.publicando.set(true);
    this.error.set('');

    this.postsService
      .crear(this.formulario.controls.content.value.trim(), this.imagen)
      .subscribe({
        next: (post) => {
          this.postCreado.emit(post);
          this.publicando.set(false);
          this.visible.set(false);
          this.limpiar();
        },
        error: (error: HttpErrorResponse) => {
          this.publicando.set(false);
          this.error.set(
            typeof error.error?.message === 'string'
              ? error.error.message
              : 'No pudimos publicar. Intentá nuevamente.',
          );
        },
      });
  }

  ngOnDestroy(): void {
    this.liberarPreview();
  }

  private limpiar(): void {
    this.formulario.reset();
    this.imagen = undefined;
    this.error.set('');
    this.liberarPreview();
  }

  private liberarPreview(): void {
    const preview = this.imagenPreview();
    if (preview) URL.revokeObjectURL(preview);
    this.imagenPreview.set(undefined);
  }
}
