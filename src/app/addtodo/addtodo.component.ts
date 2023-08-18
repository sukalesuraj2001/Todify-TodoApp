import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent {
  @Output() onTodoAdd: EventEmitter<Todo> = new EventEmitter();

  title: string = '';
  desc: string = '';
  active: boolean = false;
  sno: number; // Declare the property

  constructor() {
    this.sno = 1; // Initialize the property in the constructor
  }

  onSubmit() {
    if (this.title && this.desc) {
      const todo: Todo = {
        title: this.title,
        desc: this.desc,
        active: this.active,
        completed: false,
        sno: this.sno // Assign the value of sno
      };
      this.onTodoAdd.emit(todo);
      
      // Increment sno for the next item
      this.sno++;

      // Clear input fields after emitting the todo
      this.title = '';
      this.desc = '';
      this.active = false;
    }
  }
}
