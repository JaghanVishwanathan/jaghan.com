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
    children: [
      {
        path: '',
        redirectTo: 'journal',
        pathMatch: 'full'
      },
      {
        path: 'journal',
        loadComponent: () => import('./components/human/micro-journal/micro-journal.component').then(m => m.MicroJournalComponent)
      },
      {
        path: 'aviation',
        loadComponent: () => import('./components/human/aviation-bridge/aviation-bridge.component').then(m => m.AviationBridgeComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
