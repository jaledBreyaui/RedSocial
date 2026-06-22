import { Component, Input } from '@angular/core';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts {
  @Input({ required: true }) post!: Post;

  constructor(private readonly postsService: PostsService) {}

  get avatarUrl(): string | undefined {
    return this.postsService.obtenerUrlImagen(this.post.author.avatarURL);
  }

  get imageUrl(): string | undefined {
    return this.postsService.obtenerUrlImagen(this.post.imageURL);
  }

  get authorInitials(): string {
    const name = this.post.author.name?.trim().charAt(0) ?? '';
    const lastName = this.post.author.lastName?.trim().charAt(0) ?? '';

    return `${name}${lastName}`.toUpperCase() || 'NS';
  }

  get username(): string {
    return `@${this.post.author.email.split('@')[0]}`;
  }

  get createdAtLabel(): string {
    const createdAt = new Date(this.post.createdAt);

    if (Number.isNaN(createdAt.getTime())) {
      return '';
    }

    const elapsedMinutes = Math.max(
      0,
      Math.floor((Date.now() - createdAt.getTime()) / 60000),
    );

    if (elapsedMinutes < 1) return 'ahora';
    if (elapsedMinutes < 60) return `${elapsedMinutes} min`;

    const elapsedHours = Math.floor(elapsedMinutes / 60);
    if (elapsedHours < 24) return `${elapsedHours} h`;

    const elapsedDays = Math.floor(elapsedHours / 24);
    if (elapsedDays < 30) return `${elapsedDays} d`;

    const elapsedMonths = Math.floor(elapsedDays / 30);
    if (elapsedMonths < 12) return `${elapsedMonths} mes`;

    return `${Math.floor(elapsedMonths / 12)} a`;
  }

  get createdAtExactLabel(): string {
    const createdAt = new Date(this.post.createdAt);

    if (Number.isNaN(createdAt.getTime())) {
      return '';
    }

    return new Intl.DateTimeFormat('es-AR', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'America/Argentina/Buenos_Aires',
    }).format(createdAt);
  }
}
