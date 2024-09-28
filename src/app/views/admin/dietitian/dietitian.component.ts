import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dietitian',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dietitian.component.html',
  styleUrl: './dietitian.component.scss'
})
export class DietitianComponent {
  selectedPatient: number = 0;
  selectedDietitian: number = 0;

  constructor(private router: Router){
    this.selectedPatient = 1;
    this.selectedDietitian = 2
  }
  dietitians = [
    { id: 1, name: "Barış", surname: "CEYLAN", fullname: "Barış CEYLAN",username: 'diyetisyen1', email: 'diyetisyen1@example.com', role: 'Diyetisyen' },
    { id: 2, name: "Mustafa", surname: "GÜÇLÜ", fullname: "Mustafa GÜÇLÜ", username: 'diyetisyen2', email: 'diyetisyen2@example.com', role: 'Diyetisyen' },
  ];

  openCreateDialog() {
    this.router.navigate(['admin/create-dietitian'])
  }


  editDietitian(dietitian: any) {
    this.router.navigate(['admin/update-dietitian'])
  }

  deleteDietitian(id: number) {
    console.log('Diyetisyen siliniyor, ID:', id);
    this.dietitians = this.dietitians.filter(d => d.id !== id);
  }

  assignPatient(dietitian: any) {
    this.router.navigate(['admin/assignpatient'])
  }
}
