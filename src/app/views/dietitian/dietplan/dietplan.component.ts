import { Component } from '@angular/core';
import { DietPlan } from 'src/core/models/DietPlan';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dietplan',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dietplan.component.html',
  styleUrl: './dietplan.component.scss'
})
export class DietPlanComponent{

  constructor(private router: Router){

  }

  dietplans = [
    {   DietPlanId: 1,
        DietitianId: 1, 
        PatientId: 1, 
        StartDate: '2024-01-01', 
        EndDate: '2024-01-07', 
        CaloriesPerDay: 2000, 
        Details: 'Dengeli beslenme programı' 
    },
    {   DietPlanId: 2,       
        DietitianId: 1, 
        PatientId: 2, 
        StartDate: '2024-01-08', 
        EndDate: '2024-01-14', 
        CaloriesPerDay: 1800, 
        Details: 'Kilo verme programı' 
    },
];


  openCreateDialog() {
    this.router.navigate(['dietitian/create-dietplan'])
  }


  editDietPlan (dietplan: any) {
    this.router.navigate(['dietitian/update-dietplan'])
  }

  deleteDietPlan (id: number) {
   console.log('Diyet Planı siliniyor, ID:', id);
   this.dietplans = this.dietplans.filter(d => d.DietPlanId !== id);
  }

  assignDietPlan(dietplan: any) {
    this.router.navigate(['dietitian/dietplan/assign-dietplan'])
  }
  
}
