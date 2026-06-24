import { Pipe, PipeTransform } from '@angular/core';
import type { PostAuthor } from '../models/post';

@Pipe({
  name: 'usuarioHandle',
  standalone: true,
})
export class UsuarioHandlePipe implements PipeTransform {
  transform(user: Pick<PostAuthor, 'email'> | undefined | null): string {
    const email = user?.email?.trim();
    if (!email) return '@usuario';

    return `@${email.split('@')[0]}`;
  }
}
