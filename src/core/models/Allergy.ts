import { PatientAllergy } from "./PatientAllergy";

export class Allergy {
  id: number=0;
  allergyName: string="";
  description: string="";
  patientAllergies: PatientAllergy[] = []
}
