import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { of, tap } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/posts';
  private readonly commentsCache = new Map<string, Comment[]>();

  crear(postId: string, content: string): Observable<Comment> {
    return this.http
      .post<Comment>(
        `${this.apiUrl}/${postId}/comments`,
        { content },
        { headers: this.obtenerHeaders() },
      )
      .pipe(
        tap((comment) => {
          const comments = this.commentsCache.get(postId) ?? [];
          this.commentsCache.set(postId, [...comments, comment]);
        }),
      );
  }

  obtenerPorPost(postId: string): Observable<Comment[]> {
    const cachedComments = this.commentsCache.get(postId);

    if (cachedComments) {
      return of(cachedComments);
    }

    return this.http
      .get<Comment[]>(`${this.apiUrl}/${postId}/comments`, {
        headers: this.obtenerHeaders(),
      })
      .pipe(
        tap((comments) => {
          this.commentsCache.set(postId, comments);
        }),
      );
  }

  guardarEnCache(postId: string, comments: Comment[]): void {
    this.commentsCache.set(postId, comments);
  }

  private obtenerHeaders(): HttpHeaders {
    const token = localStorage.getItem('accessToken');

    return token
      ? new HttpHeaders({ Authorization: `Bearer ${token}` })
      : new HttpHeaders();
  }
}
