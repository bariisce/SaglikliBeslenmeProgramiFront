import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-dietplan',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-dietplan.component.html',
  styleUrl: './create-dietplan.component.scss'
})
export class CreateDietplanComponent {
  dietPlan = {
    DietetianId: '',
    PatientId: '',
    StartDate: '',
    EndDate: '',
    CaloriesPerDay: null as number | null,
    Details: ''
  };

  onSubmit() {
    console.log('Yeni diyet planı bilgileri:', this.dietPlan);
    
  }
}


