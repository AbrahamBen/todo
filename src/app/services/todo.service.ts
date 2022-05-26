import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Todo} from "../models/todo";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn:'root'
})
export class TodoService{
  public today = new Date();
  todoSubject = new Subject<any[]>();
  public todos:Todo[];
  public url:string = 'https://todo-list-app-1f3d6-default-rtdb.firebaseio.com/';





  constructor(private http:HttpClient,
              private toastr: ToastrService) {
   this.getTodoFromServer();
  }

  public emitTodo(){
    this.todoSubject.next(this.todos);
  }

  public onChangeStatus(index:number){
    this.todos[index].todoStatus = !this.todos[index].todoStatus;
    this.emitTodo();
    this.saveTodoFromServer();
  }


  public onChangeModif(i:number){
    this.todos[i].isModif = !this.todos[i].isModif;
    this.emitTodo();
    this.saveTodoFromServer();
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
    this.saveTodoFromServer();
  }

  public saveTodoFromServer(){
    this.http.put(this.url+"/todos.json",this.todos)
      .subscribe(
        ()=>{
          this.toastr.success('Données enrégistrées avec succès', 'Félicitations!', {
            timeOut: 3000,
          });
          console.log('Données enrégistrées avec succès' !);
        },
      (error)=>{
        this.toastr.error('Erreur de sauvegarde', 'Erreur', {
          timeOut: 3000,
        });
        console.log('Erreur de sauvegarde : ',error);
      }
      )
  }

  public getTodoFromServer() :void{
    this.http.get<Todo[]>(this.url+"todos.json")
      .subscribe(
        (todoRecup:Todo[])=>{
          this.todos = todoRecup;
          this.emitTodo();
        },
        (error)=>{
          this.toastr.error('Erreur de chargement des données.', 'Erreur', {
            timeOut: 3000,
          });
          console.log('Erreur de chargement des données.',error);
        },
        ()=>{
          this.toastr.info('Récupératon des données termnée avec succès', 'Bravo!', {
            timeOut: 3000,
          });
          console.log('Récupératon des données termnée');
        }
      )
  }

  public deletetodoFromServer(){
    return this.http.delete<Todo>(this.url+'/todos.json',{},).subscribe(
      ()=>{
        console.log("Suppression de la donnée du server")
      },
      (err)=>{
        console.log('Erreur lors de la suppresion de données', err)
      },
      ()=>{
        console.log('Suppression terminée avec succès');
      }
    )
  }
}
