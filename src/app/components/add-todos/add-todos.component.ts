import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent implements OnInit {

  title!: string;
  desc!: string;
  
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.title || !this.desc) {
      return alert("Please fill out the details");
    }

    const todo = {
      sno: 0,
      title: this.title,
      description: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }
}
