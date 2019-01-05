import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Ng5SliderModule } from 'ng5-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FabricaComponent } from './components/fabrica/fabrica.component';
import { LoginComponent } from './components/login/login.component';
import { RegistarComponent } from './components/registar/registar.component';
import { CondicoesComponent } from './components/condicoes/condicoes.component';
import { AboutComponent } from './components/about/about.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AuthGuard } from './components/guards/auth.guard';
import { ClienteGuard } from './components/guards/cliente.guard';
import { GestorGuard } from './components/guards/gestor.guard';
import { AdministradorGuard } from './components/guards/administrador.guard';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { MessagesComponent } from './components/messages/messages.component';
import { LoginGestaoComponent } from './components/login-gestao/login-gestao.component';
import { FabricaRegistoComponent } from './components/fabrica-registo/fabrica-registo.component';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { HistoricComponent } from './components/historic/historic.component';
import { EncomendaListaComponent } from './components/encomenda-lista/encomenda-lista.component';
import { EncomendaRegistoComponent } from './components/encomenda-registo/encomenda-registo.component';
import { EncomendaEstadoComponent } from './components/encomenda-estado/encomenda-estado.component';
import { CatalogosDetailsComponent } from './components/catalogos-details/catalogos-details.component';

import { AlterarPrecoComponent } from './components/alterarPreco/alterar-preco.component';
import { CatalogosRegistoComponent } from './components/catalogos-registo/catalogos-registo.component';
import { ProdutoRegistoComponent } from './components/produto-registo/produto-registo.component';
import { MaterialComponent } from './components/material/material.component';
import { MaterialListComponent } from './components/material-list/material-list.component';

import { ProdutoViewComponent } from './components/produto-view/produto-view.component';
import { ProdutoEditarComponent } from './components/produto-editar/produto-editar.component';
import { ColecoesRegistoComponent } from './components/colecoes-registo/colecoes-registo.component';
import { ColecoesListComponent } from './components/colecoes-list/colecoes-list.component';
import { FabricaRotaComponent } from './components/fabrica-rota/fabrica-rota.component';
import { ColecoesDetailsComponent } from './components/colecoes-details/colecoes-details.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FabricaComponent,
    LoginComponent,
    RegistarComponent,
    CondicoesComponent,
    AboutComponent,
    CatalogoComponent,
    MessagesComponent,
    LoginGestaoComponent,
    FabricaRegistoComponent,
    ProdutoListComponent,
    HistoricComponent,
    EncomendaListaComponent,
    EncomendaRegistoComponent,
    EncomendaEstadoComponent,
    CatalogosDetailsComponent,
    AlterarPrecoComponent,
    CatalogosRegistoComponent,
    ProdutoRegistoComponent,
    MaterialComponent,
    MaterialListComponent,
    ProdutoViewComponent,
    ProdutoEditarComponent,
    ColecoesRegistoComponent,
    ColecoesListComponent,
    FabricaRotaComponent,
    ColecoesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    Ng5SliderModule
  ],
  providers: [
    AuthGuard,
    ClienteGuard,
    GestorGuard,
    AdministradorGuard,
    AuthenticationService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }