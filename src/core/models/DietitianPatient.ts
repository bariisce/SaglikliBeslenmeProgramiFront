import { Dietitian } from './Dietitian'
import { Patient } from './Patient'
import { DietPlan } from './DietPlan'

export class DietitianPatient {
  id: number=0;
  dietitianId: number = 0;
  dietitians: Dietitian = new Dietitian();
  patientId: number = 0;
  patients: Patient = new Patient();
  dietPlanId: number = 0;
  dietPlans: DietPlan = new DietPlan();

}
