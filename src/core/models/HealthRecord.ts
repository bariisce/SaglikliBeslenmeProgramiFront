import { Patient } from "./Patient";

export class HealthRecord {
  id: number = 0;
  patientId: number = 0;
  patient: Patient = new Patient();
  bloodpressure: number = 0;
  heartrate: number = 0;
  cholesterol: number = 0;
  bloodsugar: number = 0;
  recordeddate: string='';
}
