import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-dietplan',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './update-dietplan.component.html',
  styleUrls: ['./update-dietplan.component.scss']
})
export class UpdateDietplanComponent {
  DietPlan = {
    DietPlanId: '',
    DietetianId: '',
    PatientId: '',
    StartDate: '',
    EndDate: '',
    CaloriesPerDay: '',
    Details: '',
  };

  constructor() {
    this.loadDietPlanData();
  }

  loadDietPlanData() {
    this.DietPlan = {
      DietPlanId: '1',
      DietetianId: '1',
      PatientId: '1',
      StartDate: '2024-01-01', 
      EndDate: '2024-10-07',
      CaloriesPerDay: '30 GRAM PROTEİNLİ, 1000 KALORİLİ DİYET ',
      Details: '5 çorba kaşığı pilav, 1 çay bardağı yoğurt veya yoğurtlu yayla çorbası, 4 çorba kaşığı etsiz sebze yemeği, 1 porsiyon elma 1 ince dilim ekmek',
    };
  }

  onSubmit() {
    console.log('Diyet planı güncelleniyor:', this.DietPlan);
  }
}




