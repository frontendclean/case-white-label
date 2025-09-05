import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./subdomains/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
  {
    path: ':produto',
    loadChildren: () =>
      import('./subdomains/subdomains.module').then((c) => c.SubdomainsModule),
  },
];
