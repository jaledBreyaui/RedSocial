import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CommentsByDayStat,
  CommentsByPostStat,
  PostsByUserStat,
} from '../models/stats';
import { API_BASE_URL } from '../config/api';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${API_BASE_URL}/admin/stats`;

  obtenerPublicacionesPorUsuario(
    from: string,
    to: string,
  ): Observable<PostsByUserStat[]> {
    return this.http.get<PostsByUserStat[]>(`${this.apiUrl}/posts-by-user`, {
      withCredentials: true,
      params: { from, to, _: Date.now() },
    });
  }

  obtenerComentariosPorDia(
    from: string,
    to: string,
  ): Observable<CommentsByDayStat[]> {
    return this.http.get<CommentsByDayStat[]>(`${this.apiUrl}/comments-by-day`, {
      withCredentials: true,
      params: { from, to, _: Date.now() },
    });
  }

  obtenerComentariosPorPost(
    from: string,
    to: string,
  ): Observable<CommentsByPostStat[]> {
    return this.http.get<CommentsByPostStat[]>(
      `${this.apiUrl}/comments-by-post`,
      {
        withCredentials: true,
        params: { from, to, _: Date.now() },
      },
    );
  }
}
