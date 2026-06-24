import { Pipe, PipeTransform } from '@angular/core';
import type { PostAuthor } from '../models/post';

@Pipe({
  name: 'inicialesUsuario',
  standalone: true,
})
export class InicialesUsuarioPipe implements PipeTransform {
  transform(user: Pick<PostAuthor, 'name' | 'lastName'> | undefined | null): string {
    if (!user) return 'NS';

    const name = user.name?.trim().charAt(0) ?? '';
    const lastName = user.lastName?.trim().charAt(0) ?? '';

    return `${name}${lastName}`.toUpperCase() || 'NS';
  }
}
