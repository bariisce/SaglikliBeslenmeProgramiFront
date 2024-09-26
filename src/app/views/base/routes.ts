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
        redirectTo: 'cards',
        pathMatch: 'full'
      },
      {
        path: 'allergies',
        loadComponent: () => import('./allergy/allergies.component').then(m => m.AllergiesComponent),
        data: {
          title: 'Allergy'
        }
      },
      {
        path: 'admin',
        loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),
        data: {
          title: 'Admin'
        }
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
          title: 'Dietitian'
        }
      },
      {
        path: 'dietitianpatient',
        loadComponent: () => import('./dietitianpatient/dietitianpatient.component').then(m => m.DietitianPatientComponent),
        data: {
          title: 'Dietitian Patient'
        }
      },
      {
        path: 'dietplan',
        loadComponent: () => import('./dietplan/dietplan.component').then(m => m.DietPlanComponent),
        data: {
          title: 'Diet Plan'
        }
      },
      {
        path: 'dietplanmeal',
        loadComponent: () => import('./dietplanmeal/dietplanmeal.component').then(m => m.DietPlanMealComponent),
        data: {
          title: 'Navs & Tabs'
        }
      },
      {
        path: 'meal',
        loadComponent: () => import('./meal/meal.component').then(m => m.MealComponent),
        data: {
          title: 'Meal'
        }
      },
    ]
  }
];


