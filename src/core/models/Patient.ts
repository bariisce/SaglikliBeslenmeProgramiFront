import { User } from "./User";
import { HealthRecord } from './HealthRecord';
import { PatientAllergy} from './PatientAllergy';
import { DietitianPatient} from './DietitianPatient';

export class Patient {
  id: number=0;
  userId: number=0;
  user: User = new User();
  weight: number=0;
  height: number=0;
  medicalCondition: string = ''
  medication: string = ''
  healthRecords: HealthRecord[] = [];
  patientAllergies: PatientAllergy[] = [];
  dietitianPatients: DietitianPatient[] = [];
}
