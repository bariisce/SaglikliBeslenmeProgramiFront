import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dietitian'
    },
    children: [
      {
        path: '',
        redirectTo: 'dietitian',
        pathMatch: 'full'
      },
      {
        path: 'dietplan',
        loadComponent: () => import('./dietplan/create-dietplan/create-dietplan.component').then(m => m.CreateDietplanComponent),
        data: {
          title: 'Diet Plan'
        }
      },
      {
        path: 'dietitianpatient',
        loadComponent: () => import('./patient/patient.component').then(m => m.PatientComponent),
        data: {
          title: 'Dietitian Patient'
        }
      },
    ]
  }
];

