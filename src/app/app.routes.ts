import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./layout/layout.routes').then((m) => m.APP_LAYOUT_ROUTES),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/components/login/login.component').then( (m) => m.LoginComponent ),
  },
  {
    path: 'registration',
    loadComponent: () => import( './features/registration/components/registration/registration.component').then((m) => m.RegistrationComponent),
  },
  { path: '**', redirectTo: '' },
];
