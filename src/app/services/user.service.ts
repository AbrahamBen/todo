import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users:User[] = [];
  public userSub = new  Subject<User[]>();

  constructor() { }

  public emitUsers():void{
      this.userSub.next(this.users);
  }
  public addUser(user:User):void{
    this.users.push(user);
    this.emitUsers();
  }
}
