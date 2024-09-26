import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'DietPlan'
    },
    children: [
      {
        path: '',
        redirectTo: 'dietplan',
        pathMatch: 'full'
      },
      {
        path: 'create-dietplan',
        loadComponent: () => import('./create-dietplan/create-dietplan.component').then(m => m.CreateDietplanComponent),
        data: {
          title: 'Create Diet Plan'
        }
      },
      {
        path: 'dietplan-list',
        loadComponent: () => import('./dietplans-list/dietplans-list.component').then(m => m.DietplansListComponent),
        data: {
          title: 'Diet Plan List'
        }
      },
      {
        path: 'update-dietplan',
        loadComponent: () => import('./update-dietplan/update-dietplan.component').then(m => m.UpdateDietplanComponent),
        data: {
          title: 'Update Diet Plan'
        }
      },
    ]
  }
];
