import { Routes } from '@angular/router';

export const APP_LAYOUT_ROUTES: Routes = [
  {
    path: 'home',
    loadComponent: () =>  import('./layout.component').then((m) => m.LayoutComponent),
    children: [
      { path: '', redirectTo: 'projects', pathMatch: 'full' },
      {
        path: 'projects',
        loadComponent: () => import( '../features/project/components/project-list/project-list.component').then((m) => m.ProjectListComponent),
      },
      { path: '**', redirectTo: '' },
    ],
  },
];
