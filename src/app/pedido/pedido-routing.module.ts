import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSupermercadosComponent } from './lista-supermercados/lista-supermercados.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';
 
 
const routes: Routes = [
 {
   path: '',
   component: ListaSupermercadosComponent ,
 },
 {
  path: 'supermercado/:supermercadoId',
  component: SupermercadoComponent
 },
];
 
@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class PedidoRoutingModule { }