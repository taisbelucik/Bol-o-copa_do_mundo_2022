import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApostaInicialComponent } from './aposta-inicial/aposta-inicial.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InformacaoApostaComponent } from './informacao-aposta/informacao-aposta.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { ResultadoComponent } from './resultado/resultado.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'login', component: LoginComponent},
  { path: 'recuperar-senha', component: RecuperarSenhaComponent},
  { path: 'cadastro', component: CadastroComponent },
  { path: 'aposta-inicial', component: ApostaInicialComponent },
  { path: 'informacao-aposta', component: InformacaoApostaComponent },
  { path: 'resultado', component: ResultadoComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
