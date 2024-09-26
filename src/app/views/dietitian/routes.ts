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
        path: 'create-dietplan',
        loadComponent: () => import('./dietplan/create-dietplan/create-dietplan.component').then(m => m.CreateDietplanComponent),
        data: {
          title: 'Create Dietitian'
        }
      },
      {
        path: 'dietplan-list',
        loadComponent: () => import('./dietplan/dietplan-list/dietplan-list.component').then(m => m.DietplanListComponent),
        data: {
          title: 'Dietitians List'
        }
      },
      {
        path: 'update-dietplan',
        loadComponent: () => import('./dietplan/update-dietplan/update-dietplan.component').then(m => m.UpdateDietplanComponent),
        data: {
          title: 'Update Dietitian'
        }
      },
      {
        path: 'patient-list',
        loadComponent: () => import('./patient/patient.component').then(m => m.PatientComponent),
        data: {
          title: 'Dietitian Patient'
        }
      },
    ]
  }
];

