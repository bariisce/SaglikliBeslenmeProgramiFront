import { Routes } from '@angular/router';
import {AllergiesComponent} from '../allergies/allergies.component'

export const routes: Routes = [
  {
    path: '',
    component: AllergiesComponent,
    data: {
      title: 'Allergies'
    }
  }
]
