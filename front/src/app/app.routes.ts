import { Routes } from '@angular/router';
import { adminGuard } from './guards/admin.guard';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () => import('./components/login/login').then((m) => m.Login),
  },
  {
    path: 'registro',
    loadComponent: () => import('./components/register/register').then((m) => m.Register),
  },
  {
    path: 'timeline',
    canActivate: [authGuard],
    loadComponent: () => import('./components/timeline/timeline').then((m) => m.Timeline),
  },
  {
    path: 'posts/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./components/post-detail/post-detail').then((m) => m.PostDetail),
  },
  {
    path: 'perfil',
    canActivate: [authGuard],
    loadComponent: () => import('./components/profile/profile').then((m) => m.Profile),
  },
  {
    path: 'admin',
    canActivate: [authGuard, adminGuard],
    loadComponent: () =>
      import('./components/admin-panel/admin-panel').then((m) => m.AdminPanel),
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio' },
];
