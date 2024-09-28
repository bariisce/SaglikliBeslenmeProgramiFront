import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-patient',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.scss'
})
export class CreatePatientComponent {
  patient = {
    name: '',
    surname: '',
    fullname: '',
    username: '',
    email: '',
    password: '',
    birthdate: '',
    gender: '',
    age: null as number | null,
    weight: null as number | null,
    height: null as number | null,
    medicalConditions: '',
    medications: ''
  };

  onSubmit() {
    console.log('Yeni hasta bilgileri:', this.patient);
    // Burada hastayı ekleme işlemlerini gerçekleştirin
  }
}
