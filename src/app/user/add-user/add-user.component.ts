import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user";
import {Address} from "../../models/address";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public userForm:FormGroup;

  constructor(private fb:FormBuilder,
              private userService:UserService,
              private router:Router) { }

  ngOnInit(): void {
    this.initUserForm();

  }
  public initUserForm():void{
    this.userForm = this.fb.group({
      firstName :this.fb.control('',[Validators.required,Validators.minLength(5)]),
      lastName :this.fb.control('',[Validators.required,Validators.minLength(5)]),
      email :this.fb.control('',[Validators.required,Validators.email,Validators.minLength(5)]),
      description :this.fb.control('',[Validators.required,Validators.minLength(15)]),
      dateBirth :this.fb.control('',[Validators.required]),

      address : this.fb.group({
        street : this.fb.control('',[Validators.required]),
        city : this.fb.control('',[Validators.required]),
        state : this.fb.control('',[Validators.required]),
        zip : this.fb.control('',[Validators.required]),
      }),

      aliases : this.fb.array([])
    });
  }

  public getAliases():FormArray{
    return this.userForm.get("aliases") as FormArray;
  }

  public addAliases():void{
    this.getAliases().push(this.fb.control("",Validators.required));
  }

  public onSubmit():void{
    const dataUser = this.userForm.value;
    console.log('DataUser', dataUser);
    const alias = dataUser.aliases ? dataUser.aliases : [];
    const address = new Address(dataUser.street,dataUser.city,dataUser.state,dataUser.zip);
    const newUser = new User(dataUser.firstName,
                          dataUser.lastName,
                          dataUser.email,
                          address,
                          dataUser.description,
                          dataUser.dateBirth,
                          alias
      );
    this.userService.addUser(newUser);
    this.router.navigate(['users']).then();
}

}
