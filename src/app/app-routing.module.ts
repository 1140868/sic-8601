import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FabricaComponent } from './components/fabrica/fabrica.component';
import { FabricaRegistoComponent } from './components/fabrica-registo/fabrica-registo.component';
import { LoginComponent } from './components/login/login.component';
import { RegistarComponent } from './components/registar/registar.component';
import { CondicoesComponent } from './components/condicoes/condicoes.component';
import { AuthGuard } from './components/guards/auth.guard';
import { ClienteGuard } from './components/guards/cliente.guard';
import { GestorGuard } from './components/guards/gestor.guard';
import { AdministradorGuard } from './components/guards/administrador.guard';
import { AboutComponent } from './components/about/about.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { LoginGestaoComponent } from './components/login-gestao/login-gestao.component';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { EncomendaListaComponent } from './components/encomenda-lista/encomenda-lista.component';
import { EncomendaEstadoComponent } from './components/encomenda-estado/encomenda-estado.component';
import { EncomendaRegistoComponent } from './components/encomenda-registo/encomenda-registo.component';
import { CatalogosDetailsComponent } from './components/catalogos-details/catalogos-details.component';
import { HistoricComponent } from './components/historic/historic.component';
import { AlterarPrecoComponent } from './components/alterarPreco/alterar-preco.component';
import { CatalogosRegistoComponent } from './components/catalogos-registo/catalogos-registo.component';
import { ProdutoRegistoComponent } from './components/produto-registo/produto-registo.component';
import { MaterialComponent } from './components/material/material.component';
import { MaterialListComponent } from './components/material-list/material-list.component';
import { ColecoesRegistoComponent } from './components/colecoes-registo/colecoes-registo.component';
import { ColecoesListComponent } from './components/colecoes-list/colecoes-list.component';
import { ColecoesDetailsComponent } from './components/colecoes-details/colecoes-details.component';
import { ProdutoViewComponent } from './components/produto-view/produto-view.component';
import { ProdutoEditarComponent } from './components/produto-editar/produto-editar.component';
import { FabricaRotaComponent } from './components/fabrica-rota/fabrica-rota.component';
const routes: Routes = [
  { path: '', component: ProdutoListComponent },
  {
    path: 'app-fabrica', component: FabricaComponent, canActivate: [AuthGuard, GestorGuard, AdministradorGuard],
    children: [{ path: 'delete/:id', component: FabricaComponent, canActivate: [AuthGuard, GestorGuard, AdministradorGuard] }],
  }, 
  { path: 'app-material', component: MaterialComponent, canActivate: [AuthGuard, AdministradorGuard, GestorGuard] },
  { path: 'app-material-list', component: MaterialListComponent },
  { path: 'app-fabrica-registo', component: FabricaRegistoComponent, canActivate: [AuthGuard, AdministradorGuard] },
  { path: 'app-fabrica-rota', component: FabricaRotaComponent, canActivate: [AuthGuard, GestorGuard] },
  { path: 'app-login-gestao', component: LoginGestaoComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegistarComponent },
  { path: 'condicoes', component: CondicoesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'app-login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'app-produto-list', component: ProdutoListComponent },
  { path: 'app-produto-list/:id', component: ProdutoViewComponent },
  { path: 'app-produto-list/:id/edit', component: ProdutoEditarComponent, canActivate: [AuthGuard, AdministradorGuard, GestorGuard] },
  { path: 'app-produto-registo', component: ProdutoRegistoComponent, canActivate: [AuthGuard, AdministradorGuard, GestorGuard] },
  { path: 'app-encomenda-lista', component: EncomendaListaComponent, canActivate: [AuthGuard, ClienteGuard] },
  { path: 'app-encomenda-estado', component: EncomendaEstadoComponent, canActivate: [AuthGuard, GestorGuard] },
  { path: 'app-encomenda-registo', component: EncomendaRegistoComponent },
  { path: 'catalogo-detail/:id', component: CatalogosDetailsComponent, canActivate: [AuthGuard, GestorGuard] },
  { path: 'historic', component: HistoricComponent, canActivate: [AuthGuard, AdministradorGuard, GestorGuard] },
  { path: 'alterarPreco', component: AlterarPrecoComponent, canActivate: [AuthGuard, AdministradorGuard] },
  { path: 'add-catalogo', component: CatalogosRegistoComponent, canActivate: [AuthGuard, GestorGuard] },
  { path: 'catalogo', component: CatalogoComponent, canActivate: [AuthGuard, AdministradorGuard, GestorGuard] },
  { path: 'colecao-detail/:id', component: ColecoesDetailsComponent, canActivate: [AuthGuard, GestorGuard] },
  { path: 'add-colecoes', component: ColecoesRegistoComponent, canActivate: [AuthGuard, AdministradorGuard, GestorGuard] },
  { path: 'colecoes', component: ColecoesListComponent, canActivate: [AuthGuard, AdministradorGuard, GestorGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
