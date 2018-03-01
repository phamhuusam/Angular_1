import { Component } from '@angular/core';
import {todo, TODOS} from '../model/todo';
import {TodoService} from "../app/service/todo.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';
  list = TODOS
  txtTitle = ""

  constructor(public ts: TodoService) {
    this.ts.getTask();
  }

  
  addTask() {
    this.list.push( {title: this.txtTitle, isComplete: false})
  }
}
