import { Patient } from "./Patient";

export class HealthRecord {
  id: number = 0;
  patientId: number = 0;
  patient: Patient = new Patient();
  bloodPressure: number = 0;
  heartRate: number = 0;
  cholesterol: number = 0;
  bloodSugar: number = 0;
  recordedDate: Date= new Date();
}
