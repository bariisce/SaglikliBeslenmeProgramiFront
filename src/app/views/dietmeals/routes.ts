import { Routes } from '@angular/router';
import {DietmealsComponent} from '../dietmeals/dietmeals.component'

export const routes: Routes = [
  {
    path: 'dietmeals',
    component: DietmealsComponent,
    data: {
      title: 'DietMeals'
    }
  }
]
