import { Role } from "./Role";
import { Patient } from './Patient'
import { Dietitian } from './Dietitian'

export class User {
  id: number = 0;
  name: string = "";
  surname: string = "";
  email: string="";
  phonenumber: string="";
  username: string = "";
  password: string = "";
  gender: string = "";
  age: number = 0;
  roleId: number=0;
  role: Role = new Role();
  patients: Patient[] = [];
  dietitians: Dietitian[] = [];
}
