import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { ConactComponent } from './conact/conact.component';
import {RouterModule, Routes} from "@angular/router";
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import {HttpClientModule} from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';

const routes : Routes = [
  {path:'', component:TodoComponent},
  {path:'home', component:HomeComponent},
  {path:'contact', component:ConactComponent},
  {path:'todos', component:TodoComponent},
  {path:'add-todo', component:AddTodoComponent},
  {path:'single-todo/:id', component:SingleTodoComponent},


  {path:'users', component:UsersComponent},
  {path:'add-user', component:AddUserComponent},
  {path:'not-found', component:NotFoundComponent},
  {path:'**', pathMatch:'full', redirectTo :'not-found'},
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    SingleTodoComponent,
    ConactComponent,
    AddTodoComponent,
    UsersComponent,
    AddUserComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
      ToastrModule.forRoot(), // ToastrModule added
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
