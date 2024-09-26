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
        path: 'create-patient',
        loadComponent: () => import('./create-patient/create-patient.component').then(m => m.CreatePatientComponent),
        data: {
          title: 'Create Patient'
        }
      },
      {
        path: 'patient-list',
        loadComponent: () => import('./patients-list/patients-list.component').then(m => m.PatientsListComponent),
        data: {
          title: 'Dietitians List'
        }
      },
      {
        path: 'update-patient',
        loadComponent: () => import('./update-patient/update-patient.component').then(m => m.UpdatePatientComponent),
        data: {
          title: 'Update Dietitian'
        }
      },
      {
        path: 'allergies',
        loadComponent: () => import('./allergies/allergies.component').then(m => m.AllergiesComponent),
        data: {
          title: 'Patient Allergies'
        }
      },
      {
        path: 'healthrecords',
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
    ]
  }
];
