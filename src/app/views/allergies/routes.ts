import { Routes } from '@angular/router';
import {AllergiesComponent} from '../allergies/allergies.component'

export const routes: Routes = [
  {
    path: 'allergies',
    component: AllergiesComponent,
    data: {
      title: 'Allergies'
    }
  }
]
