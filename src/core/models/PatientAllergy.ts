import { Patient } from './Patient'
import { Allergy} from './Allergy'

export class PatientAllergy {
  id: number=0;
  patientId: number = 0;
  patients: Patient = new Patient();
  allergyId: number = 0;
  allergies: Allergy = new Allergy();
  severity: string = '';
  reactionDescription: string = '';
}
