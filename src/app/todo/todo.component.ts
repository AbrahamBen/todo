import { Component, OnInit } from '@angular/core';
import {TodoService} from "../services/todo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public loading = false;
  public colorText = 'Blue';
  public today:any;
  public todos:any



  constructor(private todoService:TodoService,
              private router:Router) { }

  ngOnInit(): void {
    this.today = this.todoService.today;
    this.todos = this.todoService.todos.slice();
  }

  public onChangeStatus(index:number){
    this.todoService.onChangeStatus(index);
  }


  public onChangeModif(i:number){
    this.todoService.onChangeModif(i);
  }

 public onView(id: number) {
    this.router.navigate(['single-todo',id]).then();
  }
}
