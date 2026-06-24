import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { Auth } from '../services/auth';
import { SessionService } from '../services/session';

export const authGuard: CanActivateFn = () => {
  const authService = inject(Auth);
  const sessionService = inject(SessionService);
  const router = inject(Router);

  return authService.session().pipe(
    map((session) => {
      if (!session.authenticated) {
        return router.createUrlTree(['/inicio']);
      }

      sessionService.start(session);
      return true;
    }),
    catchError(() => of(router.createUrlTree(['/inicio']))),
  );
};
