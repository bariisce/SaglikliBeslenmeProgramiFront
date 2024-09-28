import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-dietitian',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-dietitian.component.html',
  styleUrl: './create-dietitian.component.scss'
})
export class CreateDietitianComponent {
  dietitian = {
    name: '',
    surname: '',
    fullname: '',
    username: '',
    email: '',
    password: '',
    birthdate: '',
    gender: '',
    age: null as number | null,
    specialization: ''
  };

  onSubmit() {
    console.log('Yeni diyetisyen bilgileri:', this.dietitian);
    // Burada yeni diyetisyeni eklemek için gerekli işlemleri yapabilirsiniz
  }
}
