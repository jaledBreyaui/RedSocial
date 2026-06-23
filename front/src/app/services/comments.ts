import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { of, tap } from 'rxjs';
import { Comment, PaginatedCommentsResponse } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/posts';
  private readonly commentsCache = new Map<string, PaginatedCommentsResponse>();

  crear(postId: string, content: string): Observable<Comment> {
    return this.http
      .post<Comment>(
        `${this.apiUrl}/${postId}/comments`,
        { content },
        { withCredentials: true },
      )
      .pipe(
        tap(() => {
          this.limpiarCachePost(postId);
        }),
      );
  }

  actualizar(postId: string, id: string, content: string): Observable<Comment> {
    return this.http
      .put<Comment>(
        `${this.apiUrl}/${postId}/comments/${id}`,
        { content },
        { withCredentials: true },
      )
      .pipe(tap(() => this.limpiarCachePost(postId)));
  }

  obtenerPorPost(
    postId: string,
    page = 1,
    limit = 10,
  ): Observable<PaginatedCommentsResponse> {
    const cacheKey = this.obtenerCacheKey(postId, page, limit);
    const cachedComments = this.commentsCache.get(cacheKey);

    if (cachedComments) {
      return of(cachedComments);
    }

    return this.http
      .get<PaginatedCommentsResponse>(`${this.apiUrl}/${postId}/comments`, {
        withCredentials: true,
        params: {
          page,
          limit,
        },
      })
      .pipe(tap((comments) => this.commentsCache.set(cacheKey, comments)));
  }

  guardarEnCache(
    postId: string,
    comments: PaginatedCommentsResponse,
    page = 1,
    limit = 10,
  ): void {
    this.commentsCache.set(this.obtenerCacheKey(postId, page, limit), comments);
  }

  private obtenerCacheKey(postId: string, page = 1, limit = 10): string {
    return `${postId}:${page}:${limit}`;
  }

  private limpiarCachePost(postId: string): void {
    const keys = Array.from(this.commentsCache.keys());
    keys
      .filter((key) => key.startsWith(`${postId}:`))
      .forEach((key) => this.commentsCache.delete(key));
  }
}
