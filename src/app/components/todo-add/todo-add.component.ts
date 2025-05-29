import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo-add',
  imports: [FormsModule], // FormsModule è necessario per usare le direttive di Angular come ngModel
  styleUrl: './todo-add.component.css',
  template:`
  <div class="d-flex justify-content-between gap-2">
    <input type="text" class="form-control"[(ngModel)]="testo" />
  
    <button class="btn btn-primary"(click)="richiediInserimento()">Add Todo
      <i class="bi bi-plus"></i>
    </button>
  </div>

  `,
})
export class TodoAddComponent {
testo = '';
onRichiestaInserimento = output<string>();
richiediInserimento(){
this.onRichiestaInserimento.emit(this.testo)
this.testo=''
}
}