import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface AuthSessionResponse {
  ok?: boolean;
  authenticated?: boolean;
  expiresAt: number | null;
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/auth';

  register(formData: FormData) {
    return this.http.post(`${this.apiUrl}/register`, formData);
  }

  login(email: string, password: string) {
    return this.http.post<AuthSessionResponse>(
      `${this.apiUrl}/login`,
      { email, password },
      { withCredentials: true },
    );
  }

  session() {
    return this.http.get<AuthSessionResponse>(`${this.apiUrl}/session`, {
      withCredentials: true,
    });
  }

  refresh() {
    return this.http.post<AuthSessionResponse>(
      `${this.apiUrl}/refresh`,
      {},
      { withCredentials: true },
    );
  }

  logout() {
    return this.http.post<{ ok: boolean }>(
      `${this.apiUrl}/logout`,
      {},
      { withCredentials: true },
    );
  }
}
