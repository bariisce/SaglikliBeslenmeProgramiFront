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
        path: 'create-dietitian',
        loadComponent: () => import('./create-dietitian/create-dietitian.component').then(m => m.CreateDietitianComponent),
        data: {
          title: 'Create Dietitian'
        }
      },
      {
        path: 'dietitian-list',
        loadComponent: () => import('./dietitians-list/dietitians-list.component').then(m => m.DietitiansListComponent),
        data: {
          title: 'Dietitians List'
        }
      },
      {
        path: 'update-dietitian',
        loadComponent: () => import('./update-dietitian/update-dietitian.component').then(m => m.UpdateDietitianComponent),
        data: {
          title: 'Update Dietitian'
        }
      },
    ]
  }
];

