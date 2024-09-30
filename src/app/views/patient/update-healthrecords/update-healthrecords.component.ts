import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-healthrecords',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-healthrecords.component.html',
  styleUrl: './update-healthrecords.component.scss'
})
export class UpdateHealthRecordsComponent {
  healthrecords = {
    bloodPressure: '110/70',
    heartRate: '63',
    cholesterol: '118',
    bloodSugar: '88',
    recordTime: '30/09/2024-16:37',
    medications: 'hasta',
    medicalConditions: 'durum'
  };

  onSubmit() {
    console.log('Mevcut sağlık kaydı güncelleniyor:', this.healthrecords);
    // Burada hastayı ekleme işlemlerini gerçekleştirin
  }
}
