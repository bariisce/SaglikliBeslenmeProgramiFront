import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-update-patient',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.scss'
})
export class UpdatePatientComponent {
  patient = {
    name: '',
    surname: '',
    fullname: '',
    username: '',
    email: '',
    birthdate: '',
    gender: '',
    age: null as number | null,
    weight: null as number | null,
    height: null as number | null,
    medicalConditions: '',
    medications: ''
  };

  constructor() {
    this.loadPatientData();
  }

  loadPatientData() {
    this.patient = {
      name: 'Ahmet',
      surname: 'Yılmaz',
      fullname: 'Ahmet Yılmaz',
      username: 'hasta1',
      email: 'hasta1@example.com',
      birthdate: '1990-01-01',
      gender: 'male',
      age: 34,
      weight: 70,
      height: 175,
      medicalConditions: 'Yüksek tansiyon',
      medications: 'Asetil salisilik asit'
    };
  }

  onSubmit() {
    console.log('Hasta güncelleniyor:', this.patient);
  }
}
