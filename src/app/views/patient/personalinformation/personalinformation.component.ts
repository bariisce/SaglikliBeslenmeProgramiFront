import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personalinformation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personalinformation.component.html',
  styleUrl: './personalinformation.component.scss'
})
export class PersonalInformationComponent {

  constructor(private router: Router){

  }

  personalinformation = [
  {
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
    height: null as number | null
  }
];
  
  openCreateDialog() {
    this.router.navigate(['patient/create-personal-information'])
  }

  editPersonalInformation(info: any) {
    this.router.navigate(['patient/update-personal-information'])
  }

  patientPersonalInformation(info: any){
    this.router.navigate(['patient/personal-information'])
  }
}
