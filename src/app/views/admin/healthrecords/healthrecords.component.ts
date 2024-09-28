import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-healthrecords',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './healthrecords.component.html',
  styleUrl: './healthrecords.component.scss'
})
export class HealthrecordsComponent {
  record = {
    bloodPressure: '',
    heartRate: null as number | null,
    cholesterol: null as number | null,
    bloodSugar: null as number | null,
    recordedDate: '',
    medications: '',
    medicalConditions: ''
  };

  onSubmit() {
    console.log('Sağlık kaydı ekleniyor:', this.record);
  }
}
