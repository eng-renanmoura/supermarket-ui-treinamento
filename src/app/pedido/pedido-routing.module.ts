import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSupermercadosComponent } from './lista-supermercados/lista-supermercados.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
 
 
const routes: Routes = [
 {
   path: '',
   component: ListaSupermercadosComponent ,
 },
 {
  path: 'supermercado/:supermercadoId',
  component: SupermercadoComponent
 },
 {
  path: ':pedidoId/pagamento',
  component: PagamentoComponent
},
];
 
@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class PedidoRoutingModule { }