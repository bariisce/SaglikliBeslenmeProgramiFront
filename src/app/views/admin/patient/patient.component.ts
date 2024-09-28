import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss'
})
export class PatientComponent {

  constructor(private router: Router){

  }

  patients = [
    { id: 1, name: "Başak", surname: "ŞİMŞEK", fullname: "başak ŞİMŞEK",username: 'HASTA1', email: 'hasta1@example.com', role: 'Hasta' },
    { id: 2, name: "Emre", surname: "AKAR", fullname: "Emre AKAR", username: 'HASTA2', email: 'hasta2@example.com', role: 'Hasta' },
  ];

  openCreateDialog() {
    this.router.navigate(['admin/create-patient'])
  }


  editPatient(patient: any) {
    this.router.navigate(['admin/update-patient'])
  }

  deletePatient(id: number) {
    console.log('Hasta siliniyor, ID:', id);
    this.patients = this.patients.filter(d => d.id !== id);
  }
  patientHealthRecord(patient: any){
    this.router.navigate(['admin/healthrecords'])
  }
}
