import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../config/api';
import { PostAuthor } from '../models/post';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${API_BASE_URL}/users`;

  obtenerActual(): Observable<PostAuthor> {
    return this.http.get<PostAuthor>(`${this.apiUrl}/me`, {
      withCredentials: true,
    });
  }

  obtenerTodos(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl, {
      withCredentials: true,
    });
  }

  crearUsuario(user: FormData): Observable<User> {
    return this.http.post<User>(this.apiUrl, user, {
      withCredentials: true,
    });
  }

  actualizarSuspension(id: string, isSuspended: boolean): Observable<User> {
    return this.http.patch<User>(
      `${this.apiUrl}/${id}/suspension`,
      { isSuspended },
      { withCredentials: true },
    );
  }
}
