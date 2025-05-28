import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TODOS } from '../../data/todos';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todos: Todo[]=[]
ngOnInit(): void { //void vuole dire che non ritorna nulla , va messo sempre nelle richieste ajax
  console.log('Todolist loaded')
  this.todos= TODOS // qui ci sara la chiamata ajax per prendere i dati da un server

}
}
