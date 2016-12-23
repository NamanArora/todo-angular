import { Component } from '@angular/core';
import {TodoService} from './todo.service';
import {Todo} from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [TodoService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo app!';
  list: Todo[];
  todo:Todo = new Todo();

  constructor(private todoService : TodoService)
  {
    this.fetch();
  }

  delete(id: number)
  {
    this.todoService.deleteTodo(id);
    this.fetch();
  }

  addTodo(): void
  {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }
  fetch()
  {
    this.list = this.todoService.getAllTodo();
  }

}
