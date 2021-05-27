import { Component } from '@angular/core';

interface Task {
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  input = '';

  tasks: Task[] = [
    { description: 'Realizar taller angular 12', completed: false },
    { description: 'Migrar proyecto a la versión 12', completed: false },
  ];

  constructor() { }

  add(): void {
    this.tasks.push({
      description: this.input,
      completed: false
    })
    this.input = '';
  }

  remove(index: number): void {
    this.tasks.splice(index, 1);
  }

}
