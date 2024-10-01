import { User } from "./User";
import { HealthRecord } from './HealthRecord';
import { PatientAllergy} from './PatientAllergy';
import { DietitianPatient} from './DietitianPatient';

export class Patient {
  id: number=0;
  userId: number=0;
  user: User = new User();
  Weight: number=0;
  Height: number=0;
  MedicalCondition: string = ''
  Medication: string = ''
  healthRecords: HealthRecord[] = [];
  patientAllergies: PatientAllergy[] = [];
  dietitianPatients: DietitianPatient[] = [];
}
