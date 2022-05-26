import {Address} from "./address";

export class User {
  constructor(public firstName:string,
              public lastName:string,
              public email:string,
              public address:Address,
              public description,
              public dateBirth:string,
              public aliases?:string[]) {
  }
}
