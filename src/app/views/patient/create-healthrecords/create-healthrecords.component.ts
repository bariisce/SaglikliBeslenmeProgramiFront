import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-healthrecords',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-healthrecords.component.html',
  styleUrl: './create-healthrecords.component.scss'
})
export class CreateHealthRecordsComponent {
  healthrecords = {
    bloodPressure: '',
    heartRate: '',
    cholesterol: '',
    bloodSugar: '',
    recordTime: '',
    medications: '',
    medicalConditions: ''
  };

  onSubmit() {
    console.log('Yeni sağlık kaydı bilgileri:', this.healthrecords);
    // Burada hastayı ekleme işlemlerini gerçekleştirin
  }
}
