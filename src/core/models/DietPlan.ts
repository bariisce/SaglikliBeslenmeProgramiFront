import { Dietitian } from './Dietitian'
import { DietPlanMeal } from './DietPlanMeal'
import { Patient } from './Patient';

export class DietPlan {
  id: number=0;
  dietitianId: number = 0;
  dietitian: Dietitian = new Dietitian();
  dietPlanMeals: DietPlanMeal[] = [];
  startDate: Date;
  endDate: Date;
  caloriesPerDay: number = 0;
  details: string="";
  patientId: number = 0;
  patients: Patient = new Patient();
}
