import { Component, OnInit } from '@angular/core';
import {TodoService} from "../services/todo.service";

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



  constructor(private todoService:TodoService) { }

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

}
