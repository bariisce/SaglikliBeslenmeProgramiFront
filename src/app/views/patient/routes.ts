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
        loadComponent: () => import('./personalinformation/personalinformation.component').then(m => m.PersonalInformationComponent),
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
      {
        path: 'create-healthrecords',
        loadComponent: () => import('./create-healthrecords/create-healthrecords.component').then(m => m.CreateHealthRecordsComponent),
        data: {
          title: 'Create Health Records'
        }
      },
      {
        path: 'update-healthrecords',
        loadComponent: () => import('./update-healthrecords/update-healthrecords.component').then(m => m.UpdateHealthRecordsComponent),
        data: {
          title: 'Update Health Records'
        }
      },
      {
        path: 'create-personal-information',
        loadComponent: () => import('./create-personalinformation/create-personalinformation.component').then(m => m.CreatePersonalInformationComponent),
        data: {
          title: 'Create Personal Information'
        }
      },
      {
        path: 'update-personal-information',
        loadComponent: () => import('./update-personalinformation/update-personalinformation.component').then(m => m.UpdatePersonalInformationComponent),
        data: {
          title: 'Update Personal Information'
        }
      },
    ]
  }
];
