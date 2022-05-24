import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Todo} from "../models/todo";

@Injectable({
  providedIn:'root'
})
export class TodoService{
  public today = new Date();
  todoSubject = new Subject<any[]>();
  public todos:Todo[];





  constructor() {
   setTimeout(()=>{
     this.todos = [
       {
         todoName: 'Projet 1',
         todoStatus: true,
         image: 'https://placeimg.com/150/150/tech',
         description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
         isModif:false
       },
       {
         todoName: 'Projet 2',
         todoStatus : false,
         image: 'https://placeimg.com/150/150/tech',
         description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
         isModif:false
       },
       {
         todoName: 'Projet 3',
         todoStatus : true,
         image: 'https://placeimg.com/150/150/tech',
         description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
         isModif:false
       },
       {
         todoName: 'Projet 4',
         todoStatus : false,
         image: 'https://placeimg.com/150/150/tech',
         description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
         isModif:false
       },
     ];
     this.emitTodo();
   },3000);
  }

  public emitTodo(){
    this.todoSubject.next(this.todos);
  }

  public onChangeStatus(index:number){
    this.todos[index].todoStatus = !this.todos[index].todoStatus;
    this.emitTodo();
  }


  public onChangeModif(i:number){
    this.todos[i].isModif = !this.todos[i].isModif;
    this.emitTodo();
  }

  public getTodo(index :number){
    if(this.todos[index]){
      return this.todos[index]
    }
    return  false
  }

  public addTodo(todo:Todo):void{
    this.todos.unshift(todo);
    this.emitTodo();
  }



}
