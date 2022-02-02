import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup | any;
  usuario: Usuario | any;
  formResult: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.cadastroForm = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    })

  }

  adicionarUsuario() {
    if(this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value)
      console.log(this.usuario);
      this.formResult = JSON.stringify(this.cadastroForm.value);
    } else {
      this.formResult = "Não submeteu.";
    }

  }

}
