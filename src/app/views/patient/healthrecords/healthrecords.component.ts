import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './healthrecords.component.html',
  styleUrl: './healthrecords.component.scss'
})
export class HealthRecordsComponent {

  constructor(private router: Router){

  }

  healthrecords = [
    { id: 1, bloodPressure: "120/83", heartRate: "70", cholesterol: "120",bloodSugar: '90', recordTime: '30/09/2024-11:40', medications: 'Hasta', medicalConditions: 'Durum' },
    { id: 2, bloodPressure: "122/84", heartRate: "72", cholesterol: "150", bloodSugar: '93', recordTime: '30/09/2024-13:47', medications: 'Hasta', medicalConditions: 'Durum' },
  ];

  openCreateDialog() {
    this.router.navigate(['patient/create-healthrecords'])
  }

  editHealthRecord(record: any) {
    this.router.navigate(['patient/update-healthrecords'])
  }

  deleteHealthRecord(id: number) {
    console.log('Sağlık kaydı siliniyor, ID:', id);
    this.healthrecords = this.healthrecords.filter(d => d.id !== id);
  }

  patientHealthRecord(record: any){
    this.router.navigate(['patient/healthrecords'])
  }
}
