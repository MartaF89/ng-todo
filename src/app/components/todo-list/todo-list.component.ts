import { Component, inject, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
// import { TODOS } from '../../data/todos';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoService } from '../../services/todo.service';
import { TodoAddComponent } from '../todo-add/todo-add.component';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent, TodoAddComponent], //se voglio importare un altro componente, lo metto qui
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
completa(id:number){
  console.log('Completamento richiesta per il todo con id:', id);
  
//qui ci sara la richiesta ajax per completare il todo
const todoDaCompletare = this.todos.find(todo => todo.id === id);
if(todoDaCompletare){
  todoDaCompletare.completed =  !todoDaCompletare.completed

}
}
inserisciNuovoTodo(testo:string){
//qui ci sara la riciesta ajax per inserire il todoù
const ids: number[]=this.todos.map(t=> t.id)//trasformo l array di todos in un array di id(number)
const nuovoId=Math.max(...ids)
const nuovoTodo:Todo={
  id:nuovoId,
  text:testo,
  completed:false
}
this.todos.push(nuovoTodo)
}
}