import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  inject,
  input,
  Output,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TextareaModule } from 'primeng/textarea';
import { AutofocusDirective } from '../../directives/autofocus.directive';
import { LimitCounterDirective } from '../../directives/limit-counter.directive';
import { Comment } from '../../models/comment';
import { Post } from '../../models/post';
import { InicialesUsuarioPipe } from '../../pipes/iniciales-usuario.pipe';
import { UsuarioHandlePipe } from '../../pipes/usuario-handle.pipe';
import { CommentsService } from '../../services/comments';
import { UsersService } from '../../services/users';

@Component({
  selector: 'app-crearcomentario',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DialogModule,
    TextareaModule,
    ButtonModule,
    InicialesUsuarioPipe,
    UsuarioHandlePipe,
    AutofocusDirective,
    LimitCounterDirective,
  ],
  templateUrl: './crearcomentario.html',
  styleUrl: './crearcomentario.css',
})
export class CrearComentario {
  private readonly fb = inject(FormBuilder);
  private readonly commentsService = inject(CommentsService);
  private readonly usersService = inject(UsersService);

  readonly post = input.required<Post>();
  @Output() comentarioCreado = new EventEmitter<Comment>();

  readonly visible = signal(false);
  readonly enviando = signal(false);
  readonly error = signal('');
  readonly usuarioActual = signal<Post['author'] | undefined>(undefined);
  readonly avatarFallido = signal(false);

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
        error: () => this.error.set('No pudimos cargar los datos de tu perfil.'),
      });
    }
  }

  cerrar(): void {
    if (this.enviando()) return;
    this.visible.set(false);
    this.formulario.reset();
    this.error.set('');
  }

  responder(): void {
    if (this.formulario.invalid || this.enviando()) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.enviando.set(true);
    this.error.set('');

    this.commentsService
      .crear(this.post()._id, this.formulario.controls.content.value.trim())
      .subscribe({
        next: (comment) => {
          this.comentarioCreado.emit(comment);
          this.enviando.set(false);
          this.visible.set(false);
          this.formulario.reset();
        },
        error: (error: HttpErrorResponse) => {
          this.enviando.set(false);
          this.error.set(
            typeof error.error?.message === 'string'
              ? error.error.message
              : 'No pudimos publicar tu respuesta.',
          );
        },
      });
  }

  get avatarUrl(): string | undefined {
    return this.usuarioActual()?.avatarURL;
  }
}
