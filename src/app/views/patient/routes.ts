import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Patient'
    },
    children: [
      {
        path: '',
        redirectTo: 'patient',
        pathMatch: 'full'
      },
      {
        path: 'allergies',
        loadComponent: () => import('./allergies/allergies.component').then(m => m.AllergiesComponent),
        data: {
          title: 'Patient Allergies'
        }
      },
      {
        path: 'health-records',
        loadComponent: () => import('./healthrecords/healthrecords.component').then(m => m.HealthRecordsComponent),
        data: {
          title: 'Health Records'
        }
      },
      {
        path: 'personal-information',
        loadComponent: () => import('./personalinformation/personalinformation.component').then(m => m.PersonalinformationComponent),
        data: {
          title: 'Personal Information'
        }
      },
      {
        path: 'diet-meals',
        loadComponent: () => import('./dietmeals/dietmeals.component').then(m => m.DietmealsComponent),
        data: {
          title: 'Diet Meals'
        }
      },
      {
        path: 'dietplan',
        loadComponent: () => import('./dietplan/dietplan.component').then(m => m.DietplanComponent),
        data: {
          title: 'Diet Plan'
        }
      },
    ]
  }
];
