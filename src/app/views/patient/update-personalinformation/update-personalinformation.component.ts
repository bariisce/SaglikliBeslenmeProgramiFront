import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-personalinformation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-personalinformation.component.html',
  styleUrl: './update-personalinformation.component.scss'
})
export class UpdatePersonalInformationComponent {
  personalinformation = {
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
  };

  onSubmit() {
    console.log('Yeni hasta bilgileri:', this.personalinformation);
    // Burada hastayı ekleme işlemlerini gerçekleştirin
  }
}
