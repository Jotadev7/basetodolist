import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './models/usuario';
import { utilsBr } from 'js-brasil'
import { NgBrazilValidators } from 'ng-brazil';
import { CustomValidators } from 'ng2-validation';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro2.component.html'
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup | any;
  usuario: Usuario | any;
  formResult: string = '';
  MASKS = utilsBr.MASKS;

  constructor(private fb: FormBuilder,
              private toastr: ToastrService) { }

  ngOnInit(){
    this.cadastroForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.maxLength(12)]],
      descricao: ['', Validators.required],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, CustomValidators.rangeLength([6, 15])]]
    })

  }

  adicionarUsuario() {
    if(this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value)
      console.log(this.usuario);
      this.formResult = JSON.stringify(this.cadastroForm.value);
      this.toastr.success('Tarefa salva com sucesso!', 'Sucesso!', {positionClass: 'toast-top-center', timeOut: 5000});
    } else {
      this.formResult = "Não submeteu.";
    }

  }

}
