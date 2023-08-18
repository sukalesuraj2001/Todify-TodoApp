import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    NavbarComponent,
    TodoItemComponent,
    AddtodoComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
