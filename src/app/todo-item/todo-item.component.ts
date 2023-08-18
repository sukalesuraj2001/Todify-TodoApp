import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  title='Toggle Done'
  @Input()
  i!: number;
   @Input()
  todo: Todo = new Todo;
@Output() todoDelete:EventEmitter<Todo>= new EventEmitter()
@Output() todoCheckbox:EventEmitter<Todo>= new EventEmitter()



  onClick(todo:Todo){
  this.todoDelete.emit(todo)
    console.log("hello from todo-item")
  }

  onCheckboxClick(todo: Todo) {
    console.log(todo)
    this.todoCheckbox.emit(todo)
    console.log(todo)
  }

 
}
