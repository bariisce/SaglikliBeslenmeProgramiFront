import { Role } from "./Role";
import { Patient } from './Patient'
import { Dietitian } from './Dietitian'

export class User {
  id: number = 0;
  name: string = "";
  surname: string = "";
  email: string="";
  phoneNumber: string="";
  userName: string = "";
  password: string = "";
  birthDate: Date= new Date();
  gender: string = "";
  age: number = 0;
  roleId: number=0;
  role: Role = new Role();
  patients: Patient[] = [];
  dietitians: Dietitian[] = [];
}
