import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Admin'
    },
    children: [
      {
        path: '',
        redirectTo: 'Admin',
        pathMatch: 'full'
      },
      {
        path: 'create-patient',
        loadComponent: () => import('./create-patient/create-patient.component').then(m => m.CreatePatientComponent),
        data: {
          title: 'Create Patient'
        }
      },
      {
        path: 'create-dietitian',
        loadComponent: () => import('./create-dietitian/create-dietitian.component').then(m => m.CreateDietitianComponent),
        data: {
          title: 'Create Dietitian'
        }
      },
      {
        path: 'dietitians-list',
        loadComponent: () => import('./dietitians-list/dietitians-list.component').then(m => m.DietitiansListComponent),
        data: {
          title: 'Dietitians List'
        }
      },
      {
        path: 'patients-list',
        loadComponent: () => import('./patients-list/patients-list.component').then(m => m.PatientsListComponent),
        data: {
          title: 'Patients List'
        }
      },
      {
        path: 'update-patient',
        loadComponent: () => import('./update-patient/update-patient.component').then(m => m.UpdatePatientComponent),
        data: {
          title: 'Update Patient'
        }
      },
      {
        path: 'update-dietitian',
        loadComponent: () => import('./update-dietitian/update-dietitian.component').then(m => m.UpdateDietitianComponent),
        data: {
          title: 'Update Dietitian'
        }
      },
    ]
  }
];
