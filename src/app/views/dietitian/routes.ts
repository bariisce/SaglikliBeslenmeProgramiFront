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
        loadComponent: () => import('./dietplan/dietplan.component').then(m => m.DietPlanComponent),
        data: {
          title: 'Diet Plan List'
        }
      },
      {
        path: 'create-dietplan',
        loadComponent: () => import('./create-dietplan/create-dietplan.component').then(m => m.CreateDietplanComponent),
        data: {
          title: 'Create Diet Plan'
        }
      },
      {
        path: 'update-dietplan',
        loadComponent: () => import('./update-dietplan/update-dietplan.component').then(m=> m.UpdateDietplanComponent),
        data: {
          title: 'Update Diet Plan'
        }
      },
      
      
    ]
  }
];

