import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-create-meal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-meal.component.html',
  styleUrl: './create-meal.component.scss'
})
export class CreateMealComponent {

}
