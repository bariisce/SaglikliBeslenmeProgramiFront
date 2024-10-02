import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService} from '../../../../core/services/api/api.service'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './patient.component.html',
  providers: [ApiService],
  styleUrl: './patient.component.scss'
})
export class PatientComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService){

  }

  patients: any[] = [];
  user: any[] = [];
  ngOnInit(): void {
    this.apiService.getAllUsers().subscribe((result) => {
        this.user = result.data;
        console.log(this.user);
      },
      (error) => {
        console.error("Error fetching patients:", error);
      }
    );
  }




  openCreateDialog() {
    this.router.navigate(['admin/create-patient'])
  }


  editPatient(patient: any) {
    this.router.navigate(['admin/update-patient'])
  }

  deletePatient(id: number) {
    this.apiService.deleteProject
    console.log('deletePatient', id)
  }
  patientHealthRecord(patient: any){
    this.router.navigate(['admin/healthrecords'])
  }


}
