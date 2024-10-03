import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService} from '../../../../core/services/api/api.service'
import { HttpClientModule } from '@angular/common/http';
import { MatDialog }  from '@angular/material/dialog';
import { CreatePatientComponent } from '../create-patient/create-patient.component';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './patient.component.html',
  providers: [ApiService],
  styleUrl: './patient.component.scss'
})
export class PatientComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService, private dialog: MatDialog){

  }

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



  createPatient(): void {
    const dialogRef = this.dialog.open(CreatePatientComponent, {
        width: '500px',
      });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.apiService.addUser(result).subscribe(
          (response) => {
            console.log('Hasta Başarıyla Eklendi: ', response);
            this.user.push(response.data);
            alert('Hasta Başarıyla Eklendi ')
            this.ngOnInit();
          },
          (error) => {
            console.error('Hasta eklenirken hata oluştu:', error);
            alert('Hasta eklenirken bir hata oluştu. Lütfen tekrar deneyin.');
          }
        )
      }
    });
  }


  editPatient(id: number) {
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
