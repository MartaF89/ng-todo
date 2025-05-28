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

onRichiestaCompletamento= output<number>();
richiediCompletamento(){
  this.onRichiestaCompletamento.emit(this.todo!.id);
}
}
