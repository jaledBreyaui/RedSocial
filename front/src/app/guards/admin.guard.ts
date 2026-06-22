import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { UsersService } from '../services/users';

export const adminGuard: CanActivateFn = () => {
  const usersService = inject(UsersService);
  const router = inject(Router);

  return usersService.obtenerActual().pipe(
    map((user) =>
      user.role === 'admin' ? true : router.createUrlTree(['/timeline']),
    ),
    catchError(() => of(router.createUrlTree(['/inicio']))),
  );
};
