import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { TODOS } from '../data/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(){
    //simula chiamata ajax al server per recuperare todo
     return  TODOS;
  }
}
