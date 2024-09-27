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
        path: 'patient',
        loadComponent: () => import('./patient/patient.component').then(m => m.PatientComponent),
        data: {
          title: 'Patients'
        }
      },
      {
        path: 'dietitian',
        loadComponent: () => import('./dietitian/dietitian.component').then(m => m.DietitianComponent),
        data: {
          title: 'Dietitians'
        }
      },
      {
        path: 'assignpatient',
        loadComponent: () => import('./assignpatient/assignpatient.component').then(m => m.AssignpatientComponent),
        data: {
          title: 'Assign Patient'
        }
      }
    ]
  }
];
