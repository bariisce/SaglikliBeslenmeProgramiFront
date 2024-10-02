import { User } from './User'
import { DietitianPatient } from './DietitianPatient';
import { DietPlan } from './DietPlan';

export class Dietitian {
  id: number=0;
  userId: number = 0;
  user: User = new User();
  dietitianPatients: DietitianPatient[] = [];
  dietPlans: DietPlan[] = [];
  specialization: string = "";
  experienceyears: number =0;
  isactive: boolean = true;
}
