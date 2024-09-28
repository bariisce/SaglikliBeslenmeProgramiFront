import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-dietitian',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-dietitian.component.html',
  styleUrl: './update-dietitian.component.scss'
})
export class UpdateDietitianComponent implements OnInit{
  dietitian = {
    name: '',
    surname: '',
    fullname: '',
    username: '',
    email: '',
    birthdate: '',
    gender: '',
    age: null as number | null,
    specialization: ''
  };

  ngOnInit() {
    this.dietitian = {
      name: 'Barış',
      surname: 'CEYLAN',
      fullname: 'Barış CEYLAN',
      username: 'diyetisyen1',
      email: 'diyetisyen1@example.com',
      birthdate: '1990-01-01',
      gender: 'male',
      age: 34,
      specialization: 'Beslenme Uzmanı'
    };
  }

  onSubmit(){
    console.log('Güncellenen diyetisyen bilgileri:', this.dietitian);
  }
}
