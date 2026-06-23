import { HttpClient } from '@angular/common/http';
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
      withCredentials: true,
      params: {
        page,
        limit,
        order,
      },
    });
  }

  obtenerPorId(id: string): Observable<PostDetail> {
    return this.http.get<PostDetail>(`${this.apiUrl}/${id}`, {
      withCredentials: true,
    });
  }

  crear(content: string, image?: File): Observable<Post> {
    const formData = new FormData();
    formData.append('content', content);

    if (image) {
      formData.append('postImage', image);
    }

    return this.http.post<Post>(`${this.apiUrl}/create`, formData, {
      withCredentials: true,
    });
  }

  actualizar(id: string, content: string): Observable<Post> {
    return this.http.put<Post>(
      `${this.apiUrl}/${id}`,
      { content },
      { withCredentials: true },
    );
  }

  toggleLike(id: string): Observable<ToggleLikeResponse> {
    return this.http.patch<ToggleLikeResponse>(
      `${this.apiUrl}/${id}/like`,
      {},
      { withCredentials: true },
    );
  }

  eliminar(id: string): Observable<{ deletedId: string }> {
    return this.http.delete<{ deletedId: string }>(`${this.apiUrl}/${id}`, {
      withCredentials: true,
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
}
