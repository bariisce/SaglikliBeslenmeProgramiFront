import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-personal-information',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-personalinformation.component.html',
  styleUrl: './create-personalinformation.component.scss'
})
export class CreatePersonalInformationComponent {
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
