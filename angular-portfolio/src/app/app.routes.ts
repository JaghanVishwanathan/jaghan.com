import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'professional',
    loadComponent: () => import('./components/professional/professional-layout/professional-layout.component').then(m => m.ProfessionalLayoutComponent)
  },
  {
    path: 'human',
    loadComponent: () => import('./components/human/human-side-landing/human-side-landing.component').then(m => m.HumanSideLandingComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
