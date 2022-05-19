import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { ConactComponent } from './conact/conact.component';
import {RouterModule, Routes} from "@angular/router";

const routes : Routes = [
  {path:'', component:TodoComponent},
  {path:'home', component:HomeComponent},
  {path:'contact', component:ConactComponent},
  {path:'todos', component:TodoComponent},
  {path:'single-todo/:id', component:SingleTodoComponent},
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
    ConactComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
      RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
