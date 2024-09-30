import{User}from './User';

export class Role {
  id: number = 0;
  roleName: string = "";
  users: User[]=[];
}
