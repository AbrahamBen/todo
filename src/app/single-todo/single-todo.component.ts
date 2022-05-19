import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TodoService} from "../services/todo.service";

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})
export class SingleTodoComponent implements OnInit {
  public todo:any
  public error:string = '';

  constructor(private route:ActivatedRoute,
              private todoService:TodoService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
   this.todo =  this.todoService.getTodo(id);
   if(!this.todo){
     this.error = 'Identifiant incorret'
   }
  }

}
