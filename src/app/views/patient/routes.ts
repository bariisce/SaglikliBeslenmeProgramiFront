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
        loadComponent: () => import('../admin/create-patient/create-patient.component').then(m => m.CreatePatientComponent),
        data: {
          title: 'Create Patient'
        }
      },
      {
        path: 'patient-list',
        loadComponent: () => import('../admin/patients-list/patients-list.component').then(m => m.PatientsListComponent),
        data: {
          title: 'Patients List'
        }
      },
      {
        path: 'update-patient',
        loadComponent: () => import('../admin/update-patient/update-patient.component').then(m => m.UpdatePatientComponent),
        data: {
          title: 'Update Patient'
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
    ]
  }
];
