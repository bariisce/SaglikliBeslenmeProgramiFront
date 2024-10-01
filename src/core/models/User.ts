import { Role } from "./Role";
import { Patient } from './Patient'
import { Dietitian } from './Dietitian'

export class User {
  id: number = 0;
  Name: string = "";
  Surname: string = "";
  Email: string="";
  PhoneNumber: string="";
  Username: string = "";
  fullName: string="";
  Password: string = "";
  BirthDate: Date= new Date();
  Gender: string = "";
  Age: number = 0;
  roleId: number=0;
  role: Role = new Role();
  patients: Patient[] = [];
  dietitians: Dietitian[] = [];

}
