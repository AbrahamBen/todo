import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public loading = false;
  public todoOne = 'Projet 1'
  public todoTwo = 'Projet 2'
  public todoThree = 'Projet 3'
  public todoFour = 'Projet 4'
  public colorText:string = 'blue'

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

  constructor() { }

  ngOnInit(): void {
  }

  public onChangeStatus(index:number){
    this.todos[index].todoStatus = !this.todos[index].todoStatus;
  }


  public onChangeModif(i:number){
    this.todos[i].isModif = !this.todos[i].isModif;
  }

}
