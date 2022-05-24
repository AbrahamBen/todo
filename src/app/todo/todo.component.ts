import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoService} from "../services/todo.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit,OnDestroy {
  public loading = false;
  public colorText = 'Blue';
  public today:any;
  public todoSub!:Subscription;
  public todos:any;



  constructor(private todoService:TodoService,
              private router:Router) { }

  ngOnInit(): void {
    this.today = this.todoService.today;
   this.todoSub = this.todoService.todoSubject.subscribe(
     (value:any)=>{
       this.todos = value
     },
     (error)=>{
       console.log('Erreur : ', error);
     },
     ()=>{
       console.log('Observable complètée')
     }
   );
   this.todoService.emitTodo();
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

  ngOnDestroy(): void {
    this.todoSub.unsubscribe();
  }
}
