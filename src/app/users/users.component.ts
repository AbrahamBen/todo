import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../models/user";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy {
  public users:User[];
  public usersSubscription:Subscription;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.usersSubscription = this.userService.userSub.subscribe(
    (userRecup:User[])=>{
      this.users =  userRecup
    });
    this.userService.emitUsers();
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }

}
