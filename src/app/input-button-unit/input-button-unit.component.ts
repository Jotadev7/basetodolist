import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  title = "Hello Word";

  constructor() { 
    this.title = "I love Angular!";
    this.changeTitle('Novo titulo');
  }

  ngOnInit(): void {
    this.title = "E agora? Qual é exibido?";
    this.changeTitle('Imprimindo alterado');
    let z = this.multiply(5, 3);
    console.log(z);
  }

  changeTitle(newTitle: string) {
    this.title = newTitle;
    console.log(newTitle);
  }

  multiply(x: number, y: number) {
    return x * y;
  }

}
