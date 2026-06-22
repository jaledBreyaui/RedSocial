import { Routes } from '@angular/router';

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
    loadComponent: () => import('./components/timeline/timeline').then((m) => m.Timeline),
  },
  {
    path: 'posts/:id',
    loadComponent: () =>
      import('./components/post-detail/post-detail').then((m) => m.PostDetail),
  },
  {
    path: 'perfil',
    loadComponent: () => import('./components/profile/profile').then((m) => m.Profile),
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio' },
];
