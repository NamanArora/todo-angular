import { Injectable } from '@angular/core';
import {Todo} from './todo';


@Injectable()
export class TodoService {

  id: number=0;
  todos: Todo[] = [];

  constructor() {  }

  addTodo(todo: Todo)
  {
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
    let obj =  this.todos.filter(data => data.id === id);
    obj[0].state = 'dismissed';
  }

}
