import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/core/services/api/api.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { User } from 'src/core/models/User';
import { Role } from 'src/core/models/Role';
@Component({
  selector: 'app-create-patient',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [ApiService],
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.scss',
})
export class CreatePatientComponent implements OnInit {
  createPatientForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.createPatientForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      birthdate: ['', Validators.required],
      gender: ['', Validators.required],
      weight: ['', Validators.required],
      height: ['', Validators.required],
      medicalcondition: [''],
      medication: [''],
    });
  }
  ngOnInit(): void {}

  submit() {
    if (this.createPatientForm.valid) {
      const user = new User(); // Create a new instance of User
      user.Name = this.createPatientForm.value.name;
      user.Surname = this.createPatientForm.value.surname;
      user.Email = this.createPatientForm.value.email;
      user.PhoneNumber = this.createPatientForm.value.phoneNumber;
      user.Username = this.createPatientForm.value.username;
      user.Password = this.createPatientForm.value.password;
      user.BirthDate = this.createPatientForm.value.birthdate; // Ensure proper date format
      user.Gender = this.createPatientForm.value.gender;
      user.Age = this.createPatientForm.value.age;
      user.roleId = 3; // Assuming '2' is the role ID for patients; adjust accordingly
      user.role = new Role(); // Initialize role if necessary

      this.apiService.addUser(user).subscribe(
        (userResponse: any) => { // Use the User class
          const patientData = {
            userId: userResponse.id, // Now TypeScript recognizes 'id'
            weight: this.createPatientForm.value.weight,
            height: this.createPatientForm.value.height,
            medicalcondition: this.createPatientForm.value.medicalcondition,
            medication: this.createPatientForm.value.medications,
            createdAt: new Date(),
            isDeleted: false
          };

          this.apiService.addPatient(patientData).subscribe(
            () => {
              console.log('Patient created successfully');
              // Optionally navigate or reset the form
            },
            (error) => {
              console.error('Error creating patient:', error);
            }
          );
        },
        (error) => {
          console.error('Error creating user:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
