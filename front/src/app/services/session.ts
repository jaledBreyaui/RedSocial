import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, AuthSessionResponse } from './auth';

const WARNING_BEFORE_EXPIRATION_MS = 5 * 60 * 1000;

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private readonly authService = inject(Auth);
  private readonly router = inject(Router);
  private warningTimer?: ReturnType<typeof setTimeout>;
  private logoutTimer?: ReturnType<typeof setTimeout>;

  readonly warningVisible = signal(false);
  readonly extending = signal(false);

  initialize(): void {
    this.authService.session().subscribe({
      next: (session) => this.start(session),
      error: () => this.clearTimers(),
    });
  }

  start(session: AuthSessionResponse): void {
    if (!session.expiresAt) {
      this.clearTimers();
      return;
    }

    this.schedule(session.expiresAt);
  }

  extend(): void {
    if (this.extending()) {
      return;
    }

    this.extending.set(true);

    this.authService.refresh().subscribe({
      next: (session) => {
        this.extending.set(false);
        this.warningVisible.set(false);
        this.start(session);
      },
      error: () => {
        this.extending.set(false);
        this.logout();
      },
    });
  }

  keepUntilExpiration(): void {
    this.warningVisible.set(false);
  }

  logout(): void {
    this.clearTimers();
    this.authService.logout().subscribe({
      next: () => void this.router.navigate(['/inicio']),
      error: () => void this.router.navigate(['/inicio']),
    });
  }

  private schedule(expiresAt: number): void {
    this.clearTimers();

    const now = Date.now();
    const warningDelay = Math.max(
      expiresAt - now - WARNING_BEFORE_EXPIRATION_MS,
      0,
    );
    const logoutDelay = Math.max(expiresAt - now, 0);

    this.warningTimer = setTimeout(() => {
      this.warningVisible.set(true);
    }, warningDelay);

    this.logoutTimer = setTimeout(() => {
      this.logout();
    }, logoutDelay);
  }

  private clearTimers(): void {
    if (this.warningTimer) {
      clearTimeout(this.warningTimer);
    }

    if (this.logoutTimer) {
      clearTimeout(this.logoutTimer);
    }

    this.warningTimer = undefined;
    this.logoutTimer = undefined;
    this.warningVisible.set(false);
  }
}
