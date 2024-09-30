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
      },
      {
        path: 'create-dietitian',
        loadComponent: () => import('./create-dietitian/create-dietitian.component').then(m => m.CreateDietitianComponent),
        data: {
          title: 'Create Dietitian'
        }
      },
      {
        path: 'update-dietitian',
        loadComponent: () => import('./update-dietitian/update-dietitian.component').then(m => m.UpdateDietitianComponent),
        data: {
          title: 'Update Dietitian'
        }
      },
      {
        path: 'create-patient',
        loadComponent: () => import('./create-patient/create-patient.component').then(m => m.CreatePatientComponent),
        data: {
          title: 'Create Patient'
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
        path: 'healthrecords',
        loadComponent: () => import('./healthrecords/healthrecords.component').then(m => m.HealthrecordsComponent),
        data: {
          title: 'Health Records'
        }
      },
      {
        path: 'mealcategory',
        loadComponent: () => import('./mealcategory/mealcategory.component').then(m => m.MealCategoryComponent),
        data: {
          title: 'Admin Meal Category'
        }
      },
      {
        path: 'create-mealcategory',
        loadComponent: () => import('./create-mealcategory/create-mealcategory.component').then(m => m.CreateMealCategoryComponent),
        data: {
          title: 'Admin Create Meal Category'
        }
      },
      {
        path: 'update-mealcategory/:id',
        loadComponent: () => import('./update-mealcategory/update-mealcategory.component').then(m => m.UpdateMealCategoryComponent),
        data: {
          title: 'Admin Update Meal Category'
        }
      },
      {
        path: 'meal',
        loadComponent: () => import('./meal/meal.component').then(m => m.MealComponent),
        data: {
          title: 'Admin Meal'
        }
      },
      {
        path: 'admin-create-meal',
        loadComponent: () => import('./create-meal/create-meal.component').then(m => m.CreateMealComponent),
        data: {
          title: 'Admin Create Meal'
        }
      },
      {
        path: 'admin-update-meal',
        loadComponent: () => import('./update-meal/update-meal.component').then(m => m.UpdateMealComponent),
        data: {
          title: 'Admin Update Meal'
        }
      },
    ]
  }
];
