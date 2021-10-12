import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todoList: Todo[];
  localItem: string | null;

  constructor() {
    this.localItem = localStorage.getItem("todos");
    if (!this.localItem) {
      this.todoList = [];
    } else {
      this.todoList = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }

  deleteTodoFromList(todo: Todo) {
    const idx = this.todoList.indexOf(todo);
    this.todoList.splice(idx, 1);
    localStorage.setItem("todos", JSON.stringify(this.todoList));
    // alert("Deleted");
  }

  addTodoInList(todo: Todo) {
    this.todoList.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todoList));
    // alert("Added");
  }

  markTodoStatus(todo: Todo) {
    const idx = this.todoList.indexOf(todo);
    this.todoList[idx].active = !this.todoList[idx].active;
    localStorage.setItem("todos", JSON.stringify(this.todoList));
  }

}
