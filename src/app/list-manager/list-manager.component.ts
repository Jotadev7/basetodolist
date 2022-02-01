import { Component, OnInit } from '@angular/core';
  import { TodoItem } from '../interfaces/todo-item';

  @Component({
    selector: 'app-list-manager',
    templateUrl: './list-manager.component.html'
  })
  export class ListManagerComponent implements OnInit {
    todoList: TodoItem[] = [
      {title: 'install NodeJs', completed: true},
      {title: 'install Angular CLI', completed: true},
      {title: 'create new app', completed: true},
      {title: 'serve app', completed: true},
      {title: 'develop app', completed: true},
      {title: 'deploy app', completed: true}
    ];

    constructor() { }

    ngOnInit() {
    }

    addItem(title: string) {
      this.todoList.push({ title })
    }
    
  }