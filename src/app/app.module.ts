import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { InicioComponent } from './inicio/inicio.component';
import {MatButtonModule} from '@angular/material/button';
import { RegrasModalComponent } from './regras-modal/regras-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ApostaInicialComponent } from './aposta-inicial/aposta-inicial.component';
import { InformacaoApostaComponent } from './informacao-aposta/informacao-aposta.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { TabelaConfrontoComponent } from './shared/tabela-confronto/tabela-confronto.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegrasModalComponent,
    LoginComponent,
    RecuperarSenhaComponent,
    CadastroComponent,
    ApostaInicialComponent,
    InformacaoApostaComponent,
    ResultadoComponent,
    TabelaConfrontoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
