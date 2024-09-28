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
        loadComponent: () => import('./beef/beef.component').then(m => m.BeefComponent),
        data: {
          title: 'Beef'
        }
      },
      {
        path: 'beef/:id',
        loadComponent: () => import('./beefdetail/beefdetail.component').then(m => m.BeefdetailComponent),
        data: {
          title: 'Beef Detail'
        }
      },
      {
        path: 'cereal-meals',
        loadComponent: () => import('./cereal/cereal.component').then(m => m.CerealComponent),
        data: {
          title: 'Cereal'
        }
      },
      {
        path: 'cereal-meals/:id',
        loadComponent: () => import('./cerealdetail/cerealdetail.component').then(m => m.CerealdetailComponent),
        data: {
          title: 'Cereal Meals Detail'
        }
      },
      {
        path: 'chicken-meals',
        loadComponent: () => import('./chicken/chicken.component').then(m => m.ChickenComponent),
        data: {
          title: 'Chicken'
        }
      },
      {
        path: 'chicken-meals/:id',
        loadComponent: () => import('./chickendetail/chickendetail.component').then(m => m.ChickendetailComponent),
        data: {
          title: 'Chicken Meals Detail'
        }
      },
      {
        path: 'legume',
        loadComponent: () => import('./legume/legume.component').then(m => m.LegumeComponent),
        data: {
          title: 'Legume'
        }
      },
      {
        path: 'legume/:id',
        loadComponent: () => import('./legumedetail/legumedetail.component').then(m => m.LegumeDetailComponent),
        data: {
          title: 'Legume Detail'
        }
      },
      {
        path: 'salads',
        loadComponent: () => import('./salad/salad.component').then(m => m.SaladComponent),
        data: {
          title: 'Salad'
        }
      },
      {
        path: 'salads/:id',
        loadComponent: () => import('./saladdetail/saladdetail.component').then(m => m.SaladdetailComponent),
        data: {
          title: 'Salad Detail'
        }
      },
      {
        path: 'sea-meals',
        loadComponent: () => import('./seameals/seameals.component').then(m => m.SeaMealsComponent),
        data: {
          title: 'Sea Meals'
        }
      },
      {
        path: 'sea-meals/:id',
        loadComponent: () => import('./seamealsdetail/seamealsdetail.component').then(m => m.SeaMealDetailComponent),
        data: {
          title: 'Sea Meals Detail'
        }
      },
      {
        path: 'soups',
        loadComponent: () => import('./soup/soup.component').then(m => m.SoupComponent),
        data: {
          title: 'Soup'
        }
      },
      {
        path: 'soups/:id',
        loadComponent: () => import('./soupdetail/soupdetail.component').then(m => m.SoupdetailComponent),
        data: {
          title: 'Soup Meals Detail'
        }
      }
    ]
  }
];
