import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, PostDetail } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/posts';
  private readonly serverUrl = 'http://localhost:3000';

  obtenerTodos(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl, {
      headers: this.obtenerHeaders(),
    });
  }

  obtenerPorId(id: string): Observable<PostDetail> {
    return this.http.get<PostDetail>(`${this.apiUrl}/${id}`, {
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
