import {Injectable} from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class TodoService{
  public today = new Date();
  public todos = [
    {
      todoName: 'Projet 1',
      todoStatus: true,
      image: 'https://via.placeholder.com/150',
      isModif:false
    },
    {
      todoName: 'Projet 2',
      todoStatus : false,
      image: 'https://via.placeholder.com/150',
      isModif:false
    },
    {
      todoName: 'Projet 3',
      todoStatus : true,
      image: 'https://via.placeholder.com/150',
      isModif:false
    },
    {
      todoName: 'Projet 4',
      todoStatus : false,
      image: 'https://via.placeholder.com/150',
      isModif:false
    },
  ];

  constructor() {
  }

  public onChangeStatus(index:number){
    this.todos[index].todoStatus = !this.todos[index].todoStatus;
  }


  public onChangeModif(i:number){
    this.todos[i].isModif = !this.todos[i].isModif;
  }

  public getTodo(index :number){
    if(this.todos[index]){
      return this.todos[index]
    }
    return  false
  }


}
