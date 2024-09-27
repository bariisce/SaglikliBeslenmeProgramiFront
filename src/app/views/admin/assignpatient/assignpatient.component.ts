import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignpatient',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './assignpatient.component.html',
  styleUrl: './assignpatient.component.scss'
})
export class AssignpatientComponent {
  patients = [
    { id: 1, name: 'Hasta 1' },
    { id: 2, name: 'Hasta 2' },
  ];

  dietitians = [
    { id: 1, name: 'Diyetisyen 1' },
    { id: 2, name: 'Diyetisyen 2' },
  ];

  selectedPatient: number=0
  selectedDietitian: number=0;

  assignDietitian() {

  }
}
