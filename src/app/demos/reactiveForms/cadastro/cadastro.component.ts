import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup | any;

  constructor() { }

  ngOnInit(){
    this.cadastroForm = new FormGroup({
      nome: new FormControl('')
    })

  }

}
