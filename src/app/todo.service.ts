import { Injectable } from '@angular/core';
import {Todo} from './todo';


@Injectable()
export class TodoService {

  id: number=0;
  todos: Todo[] = [];

  constructor() {  }

  addTodo(todo: Todo)
  {
    //console.log(todo.name);
    todo.id = this.id+1;
    this.id+=1;
    this.todos.push(todo);
  }

  getAllTodo(): Todo[]
  {
    return this.todos;
  }

  deleteTodo(id: number)
  {
    this.todos = this.todos.filter(data => data.id !== id);
  }

}
