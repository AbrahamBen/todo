import {Injectable} from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class TodoService{
  public today = new Date();
  public todos:any;
  public todoSlice:any;

  constructor() {
    this.todos = new Promise((resolve,reject)=>{
      const data = [
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
      if(data.length){
        setTimeout(()=>{
          resolve(data)
          this.todoSlice = data;
        },3000)
      }else{
        reject('Aucune données disponible');
      }
    });
  }

  public onChangeStatus(index:number){
    this.todoSlice[index].todoStatus = !this.todoSlice[index].todoStatus;
  }


  public onChangeModif(i:number){
    this.todoSlice[i].isModif = !this.todoSlice[i].isModif;
  }

  public getTodo(index :number){
    if(this.todoSlice[index]){
      return this.todoSlice[index]
    }
    return  false
  }


}
