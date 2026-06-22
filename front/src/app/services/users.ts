import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PostAuthor } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/users';

  obtenerActual(): Observable<PostAuthor> {
    const token = localStorage.getItem('accessToken');
    const headers = token
      ? new HttpHeaders({ Authorization: `Bearer ${token}` })
      : new HttpHeaders();

    return this.http.get<PostAuthor>(`${this.apiUrl}/me`, { headers });
  }
}
