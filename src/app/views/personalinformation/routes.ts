import { Routes } from '@angular/router';
import { PersonalinformationComponent } from '../personalinformation/personalinformation.component'

export const routes: Routes = [
  {
    path: 'personal-information',
    component: PersonalinformationComponent,
    data: {
      title: 'Personal Information',
    }
  }
]
