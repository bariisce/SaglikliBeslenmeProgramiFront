import { Dietitian } from './Dietitian'
import { DietPlanMeal } from './DietPlanMeal'
import { Patient } from './Patient';

export class DietPlan {
  id: number=0;
  dietitianId: number = 0;
  dietitian: Dietitian = new Dietitian();
  dietPlanMeals: DietPlanMeal[] = [];
  dietplanname: string = '';
  startDate: string='';
  endDate: string='';
  caloriesPerDay: number = 0;
  details: string="";
  patientId: number = 0;
  status: boolean = true
  patients: Patient = new Patient();
}
