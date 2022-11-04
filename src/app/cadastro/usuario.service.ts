import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from './usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private _http: HttpClient) { }
  
  criaUsuario(usuario: string, email: string, senha: string){
    const dadosForm: IUsuario = {
      email,
      usuario,
      senha
    }
    const rota = "http://localhost:8080/usuario"
    this._http.post<IUsuario>(rota, dadosForm)

  }
}
