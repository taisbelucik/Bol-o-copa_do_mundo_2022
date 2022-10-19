import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'login', component: LoginComponent},
  { path: 'recuperar-senha', component: RecuperarSenhaComponent},
  { path: 'cadastro', component: CadastroComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
