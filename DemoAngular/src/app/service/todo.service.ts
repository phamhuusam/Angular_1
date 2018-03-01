import { Injectable } from '@angular/core';
import {todo, TODOS} from "../../model/todo"

@Injectable()
export class TodoService {
  list: todo[]
  constructor() { }

  getTask() {
    this.list = TODOS;
  }
  addTask (todo) {
    this.list.push(todo);
  }
}
