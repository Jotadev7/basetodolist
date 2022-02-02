import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup | any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.cadastroForm = this.fb.group({
      titulo: [''],
      descricao: [''],
      email: [''],
      senha: ['']
    })

  }

  adicionarUsuario() {
    let x = this.cadastroForm.value;
    console.log(x);
  }

}
