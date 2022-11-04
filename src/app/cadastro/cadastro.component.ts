import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUsuario } from './usuario.interface';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form = this.fb.group({
    usuario: ['', [Validators.required]],
    email: ['', [Validators.required]],
    senha: ['', [Validators.required]],
  });
  
  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  submit(){
    const dadosForm = this.form.getRawValue();  
    // const dadosForm: IUsuario = {
    //   usuario: this.form.get("usuario").value
    // }
     this.usuarioService.criaUsuario(dadosForm.usuario, dadosForm.email, dadosForm.senha)
  }
}
