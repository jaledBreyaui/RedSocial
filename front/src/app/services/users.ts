import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PostAuthor } from '../models/post';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/users';

  obtenerActual(): Observable<PostAuthor> {
    return this.http.get<PostAuthor>(`${this.apiUrl}/me`, {
      headers: this.obtenerHeaders(),
    });
  }

  obtenerTodos(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl, {
      headers: this.obtenerHeaders(),
    });
  }

  crearUsuario(user: FormData): Observable<User> {
    return this.http.post<User>(this.apiUrl, user, {
      headers: this.obtenerHeaders(),
    });
  }

  actualizarSuspension(id: string, isSuspended: boolean): Observable<User> {
    return this.http.patch<User>(
      `${this.apiUrl}/${id}/suspension`,
      { isSuspended },
      { headers: this.obtenerHeaders() },
    );
  }

  private obtenerHeaders(): HttpHeaders {
    const token = localStorage.getItem('accessToken');

    return token
      ? new HttpHeaders({ Authorization: `Bearer ${token}` })
      : new HttpHeaders();
  }
}
