import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () => import('./login/login').then((module) => module.Login),
  },
  {
    path: 'registro',
    loadComponent: () =>
      import('./register/register').then((module) => module.Register),
  },
  {
    path: 'timeline',
    loadComponent: () =>
      import('./components/timeline/timeline').then(
        (module) => module.Timeline,
      ),
  },
  {
    path: 'post',
    loadComponent: () => import('./posts/posts').then((module) => module.Posts),
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio' },
];
