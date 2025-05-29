import { Component, inject, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
// import { TODOS } from '../../data/todos';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
// constructor( private todoService: TodoService){ //alternativa per richieder eun servizio, in questo caso il servizio TodoService

// }
//alternativa per richiedere un servizio, in questo caso il servizio TodoService
 todoService: TodoService = inject(TodoService)
  todos: Todo[]=[]
ngOnInit(): void { //void vuole dire che non ritorna nulla , va messo sempre nelle richieste ajax

  console.log('Todolist loaded')
  this.todos= this.todoService.getTodos() // qui ci sara la chiamata ajax per prendere i dati da un server

}
}
