import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup | any;
  usuario: Usuario | any;

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
    this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value)
    console.log(this.usuario);
  }

}
