import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'MealCategories'
    },
    children: [
      {
        path: '',
        redirectTo: 'mealcategories',
        pathMatch: 'full'
      },
      {
        path: 'beef',
        loadComponent: () => import('./beef/meals/meals.component').then(m => m.MealsComponent),
        data: {
          title: 'Beef'
        }
      },
      {
        path: 'cereal',
        loadComponent: () => import('./cereal/meals/meals.component').then(m => m.MealsComponent),
        data: {
          title: 'Cereal'
        }
      },
      {
        path: 'chicken',
        loadComponent: () => import('./chicken/meals/meals.component').then(m => m.MealsComponent),
        data: {
          title: 'Chicken'
        }
      },
      {
        path: 'legume',
        loadComponent: () => import('./legume/meals/meals.component').then(m => m.MealsComponent),
        data: {
          title: 'Legume'
        }
      },
      {
        path: 'salad',
        loadComponent: () => import('./salad/meals/meals.component').then(m => m.MealsComponent),
        data: {
          title: 'Salad'
        }
      },
      {
        path: 'seameal',
        loadComponent: () => import('./seameal/meals/meals.component').then(m => m.MealsComponent),
        data: {
          title: 'Seameal'
        }
      },
      {
        path: 'soup',
        loadComponent: () => import('./soup/meals/meals.component').then(m => m.MealsComponent),
        data: {
          title: 'Soup'
        }
      }
    ]
  }
];
