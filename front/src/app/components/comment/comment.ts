import { Component, EventEmitter, input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutofocusDirective } from '../../directives/autofocus.directive';
import { BrokenImageDirective } from '../../directives/broken-image.directive';
import { Comment } from '../../models/comment';
import { InicialesUsuarioPipe } from '../../pipes/iniciales-usuario.pipe';
import { TiempoRelativoPipe } from '../../pipes/tiempo-relativo.pipe';
import { UsuarioHandlePipe } from '../../pipes/usuario-handle.pipe';
import { CommentsService } from '../../services/comments';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [
    FormsModule,
    InicialesUsuarioPipe,
    TiempoRelativoPipe,
    UsuarioHandlePipe,
    AutofocusDirective,
    BrokenImageDirective,
  ],
  templateUrl: './comment.html',
  styleUrl: './comment.css',
})
export class CommentComponent {
  readonly comment = input.required<Comment>();
  readonly currentUserId = input('');
  @Output() commentUpdated = new EventEmitter<Comment>();

  readonly editando = signal(false);
  readonly guardandoEdicion = signal(false);
  readonly errorEdicion = signal('');
  readonly avatarFallido = signal(false);
  contenidoEditado = '';

  constructor(private readonly commentsService: CommentsService) {}

  iniciarEdicion(): void {
    if (!this.isOwnComment) {
      return;
    }

    this.contenidoEditado = this.comment().content;
    this.errorEdicion.set('');
    this.editando.set(true);
  }

  cancelarEdicion(): void {
    if (this.guardandoEdicion()) {
      return;
    }

    this.contenidoEditado = '';
    this.errorEdicion.set('');
    this.editando.set(false);
  }

  guardarEdicion(): void {
    const content = this.contenidoEditado.trim();

    if (!content || content.length < 2) {
      this.errorEdicion.set('El contenido debe tener al menos 2 caracteres.');
      return;
    }

    if (content === this.comment().content.trim()) {
      this.editando.set(false);
      return;
    }

    this.guardandoEdicion.set(true);
    this.errorEdicion.set('');

    this.commentsService
      .actualizar(this.comment().post, this.comment()._id, content)
      .subscribe({
        next: (comment) => {
          this.commentUpdated.emit(comment);
          this.editando.set(false);
          this.guardandoEdicion.set(false);
        },
        error: () => {
          this.errorEdicion.set('No pudimos editar el comentario.');
          this.guardandoEdicion.set(false);
        },
      });
  }

  get isOwnComment(): boolean {
    return this.comment().author._id === this.currentUserId();
  }

  editado(): boolean {
    const createdAt = new Date(this.comment().createdAt).getTime();
    const updatedAt = new Date(this.comment().updatedAt).getTime();

    return (
      !Number.isNaN(createdAt) &&
      !Number.isNaN(updatedAt) &&
      updatedAt - createdAt > 1000
    );
  }

  get avatarUrl(): string | undefined {
    return this.comment().author.avatarURL;
  }

}
