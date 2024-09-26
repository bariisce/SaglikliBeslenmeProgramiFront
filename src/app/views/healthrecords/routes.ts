import { Routes } from '@angular/router';
import {HealthrecordsComponent} from '../healthrecords/healthrecords.component'

export const routes: Routes = [
  {
    path: 'health-record',
    component: HealthrecordsComponent,
    data: {
      title: 'Health Record',
    }
  }
]
