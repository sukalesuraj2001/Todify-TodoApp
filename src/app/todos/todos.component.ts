import { Component } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[] = [];
  localItem!: string;
 
  constructor(){
    const locatItem = localStorage.getItem("todos");
    if(locatItem == null){
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(locatItem); // Use locatItem instead of this.localItem
    }
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.findIndex(t => t.sno === todo.sno);

    if (index != -1) {
      const deletedTodo = this.todos.splice(index, 1)[0];
      // alert("You are deleting: " + deletedTodo.title);
      console.log(deletedTodo);
      localStorage.setItem('todos', JSON.stringify(this.todos)); // Remove the space after 'todos'
    } else {
      console.log("Todo not found in the list.");
    }
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos)); // Remove the space after 'todos'
  } 
  toggleTodo(todo: Todo) {
    // console.log(todo);
    const index= this.todos.indexOf(todo)
    this.todos[index].active=!this.todos[index].active
    localStorage.setItem('todos', JSON.stringify(this.todos)); // Remove the space after 'todos'
  }

  // for  date

  cdate=Date.now();


 
}
