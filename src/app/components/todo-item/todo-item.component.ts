import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo
  @Input() index!: number
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(todo: Todo) {
    this.todoDelete.emit(todo);
    // alert(`Successfuly deleted ${todo.title}`);
  }

  onCheckBox(todo: Todo) {
    this.todoCheckBox.emit(todo);
  }

}
