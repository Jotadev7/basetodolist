import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basetodolist';
  todoList = [
    {title: 'Tarefa 1'},
    {title: 'Tarefa 2'},
    {title: 'Tarefa 3'},
    {title: 'Tarefa 4'},
    {title: 'Tarefa 5'},
    {title: 'Tarefa 6'},
  ]
}
