import { Component,Input, output } from '@angular/core';
import { Todo } from '../../models/todo';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input()
todo?: Todo;

onRichiestaCompletamento= output<number>();//creo il dispositivo che puo generare un evento, in questo caso un numero che rappresenta l'id del todo
richiediCompletamento(){// metodo che viene chiamato quando l'utente clicca sul pulsante di completamento
  this.onRichiestaCompletamento.emit(this.todo!.id);
}
}
