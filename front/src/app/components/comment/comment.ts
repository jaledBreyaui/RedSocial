import { Component, input } from '@angular/core';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment',
  standalone: true,
  templateUrl: './comment.html',
  styleUrl: './comment.css',
})
export class CommentComponent {
  readonly comment = input.required<Comment>();

  get avatarUrl(): string | undefined {
    return this.comment().author.avatarURL;
  }

  get initials(): string {
    const author = this.comment().author;
    return `${author.name.charAt(0)}${author.lastName.charAt(0)}`.toUpperCase();
  }

  get username(): string {
    return `@${this.comment().author.email.split('@')[0]}`;
  }

  get createdAtLabel(): string {
    const createdAt = new Date(this.comment().createdAt);
    if (Number.isNaN(createdAt.getTime())) return '';

    const minutes = Math.max(
      0,
      Math.floor((Date.now() - createdAt.getTime()) / 60000),
    );

    if (minutes < 1) return 'ahora';
    if (minutes < 60) return `${minutes} min`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} h`;

    return `${Math.floor(hours / 24)} d`;
  }
}
