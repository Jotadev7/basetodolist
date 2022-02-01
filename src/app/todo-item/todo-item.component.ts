import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html'
})
export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem | any;

  constructor() { }

  ngOnInit(): void {
  }
  
}
