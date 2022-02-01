import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html'
})
export class InputButtonUnitComponent implements OnInit {

  @Output() submit: EventEmitter<any> = new EventEmitter();
  title = '';

  constructor() { }

  ngOnInit(): void {
  }


  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}
