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
        path: 'beef-meals',
        loadComponent: () => import('./beef/meals/meals.component').then(m => m.MealsComponent),
        data: {
          title: 'Beef'
        }
      },
      {
        path: 'cereal-meals',
        loadComponent: () => import('./cereal/meals/meals.component').then(m => m.MealsComponent),
        data: {
          title: 'Cereal'
        }
      },
      {
        path: 'chicken-meals',
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
        path: 'salads',
        loadComponent: () => import('./salad/meals/meals.component').then(m => m.MealsComponent),
        data: {
          title: 'Salad'
        }
      },
      {
        path: 'sea-meals',
        loadComponent: () => import('./seameal/meals/meals.component').then(m => m.MealsComponent),
        data: {
          title: 'Sea MealS'
        }
      },
      {
        path: 'soups',
        loadComponent: () => import('./soup/meals/meals.component').then(m => m.MealsComponent),
        data: {
          title: 'Soup'
        }
      }
    ]
  }
];
