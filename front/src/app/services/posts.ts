import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  PaginatedPostsResponse,
  Post,
  PostDetail,
  ToggleLikeResponse,
} from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/posts';
  private readonly serverUrl = 'http://localhost:3000';

  obtenerTodos(
    page = 1,
    limit = 10,
    order: 'recent' | 'likes' = 'recent',
  ): Observable<PaginatedPostsResponse> {
    return this.http.get<PaginatedPostsResponse>(this.apiUrl, {
      headers: this.obtenerHeaders(),
      params: {
        page,
        limit,
        order,
      },
    });
  }

  obtenerPorId(id: string): Observable<PostDetail> {
    return this.http.get<PostDetail>(`${this.apiUrl}/${id}`, {
      headers: this.obtenerHeaders(),
    });
  }

  crear(content: string, image?: File): Observable<Post> {
    const formData = new FormData();
    formData.append('content', content);

    if (image) {
      formData.append('postImage', image);
    }

    return this.http.post<Post>(`${this.apiUrl}/create`, formData, {
      headers: this.obtenerHeaders(),
    });
  }

  actualizar(id: string, content: string): Observable<Post> {
    return this.http.put<Post>(
      `${this.apiUrl}/${id}`,
      { content },
      { headers: this.obtenerHeaders() },
    );
  }

  toggleLike(id: string): Observable<ToggleLikeResponse> {
    return this.http.patch<ToggleLikeResponse>(
      `${this.apiUrl}/${id}/like`,
      {},
      { headers: this.obtenerHeaders() },
    );
  }

  eliminar(id: string): Observable<{ deletedId: string }> {
    return this.http.delete<{ deletedId: string }>(`${this.apiUrl}/${id}`, {
      headers: this.obtenerHeaders(),
    });
  }

  obtenerUrlImagen(imageURL?: string): string | undefined {
    if (!imageURL) {
      return undefined;
    }

    if (imageURL.startsWith('http://') || imageURL.startsWith('https://')) {
      return imageURL;
    }

    return `${this.serverUrl}${imageURL}`;
  }

  private obtenerHeaders(): HttpHeaders {
    const token = localStorage.getItem('accessToken');

    return token
      ? new HttpHeaders({ Authorization: `Bearer ${token}` })
      : new HttpHeaders();
  }
}
