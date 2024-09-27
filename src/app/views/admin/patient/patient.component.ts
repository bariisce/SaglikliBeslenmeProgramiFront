import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss'
})
export class PatientComponent {
  patients = [
    { id: 1, name: "Başak", surname: "ŞİMŞEK", fullname: "başak ŞİMŞEK",username: 'HASTA1', email: 'hasta1@example.com', role: 'Hasta' },
    { id: 2, name: "Emre", surname: "AKAR", fullname: "Emre AKAR", username: 'HASTA2', email: 'hasta2@example.com', role: 'Hasta' },
  ];

  openCreateDialog() {
    console.log('Yeni Diyetisyen Ekle tıklandı.');
  }


  editPatient(patient: any) {
    console.log('Hasta düzenleniyor:', patient);
  }

  deletePatient(id: number) {
    console.log('Hasta siliniyor, ID:', id);
    this.patients = this.patients.filter(d => d.id !== id);
  }
}
