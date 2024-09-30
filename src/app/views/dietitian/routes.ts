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
        loadComponent: () => import('./dietplan2/dietplan2.component').then(m => m.DietPlan2Component),
        data: {
          title: 'Diet Plan List'
        }
      },
      {
        path: 'create-dietplan2',
        loadComponent: () => import('./create-dietplan2/create-dietplan2.component').then(m => m.CreateDietplan2Component),
        data: {
          title: 'Create Diet Plan'
        }
      },
      {
        path: 'update-dietplan2',
        loadComponent: () => import('./update-dietplan2/update-dietplan2.component').then(m=> m.UpdateDietplan2Component),
        data: {
          title: 'Create Diet Plan'
        }
      },
      
      
    ]
  }
];

