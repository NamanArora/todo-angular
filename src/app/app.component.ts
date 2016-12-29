import { Component } from '@angular/core';
import {TodoService} from './todo.service';
import {Todo} from './todo';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  myForm: FormGroup;

  constructor(private todoService : TodoService, private fb: FormBuilder)
  {
    this.fetch();
    this.buildForm();
  }

  buildForm(): void
  {
    this.myForm = this.fb.group(
      {
        indata: [this.todo.name,
                  [Validators.required,Validators.minLength(1)]
                  ]
      }
    );
    this.myForm.valueChanges.subscribe(data => this.todo.name=data.indata);

  }

  delete(id: number)
  {
    this.todoService.deleteTodo(id);
    this.fetch();
  }

  addTodo(): void
  {

    if(this.todo.name!="")
    {
    console.log(this.todo.name);
    this.todoService.addTodo(this.todo);
    }
    this.todo = new Todo();
    this.myForm.setValue({indata: ""});
    this.fetch();

  }
  fetch()
  {
    this.list = this.todoService.getAllTodo();
    //console.log(this.list.values);
  }

}
