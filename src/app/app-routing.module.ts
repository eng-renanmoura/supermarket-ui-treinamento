import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrosComponent } from './erros/erros/erros.component';
 

const routes: Routes = [
 { path: '', redirectTo: 'pedidos', pathMatch: 'full' },
 //{ path: 'supermercados', loadChildren: () => import(`./supermercados/supermercados.module`).then(m => m.SupermercadosModule) },
 //{ path: 'pedidos', loadChildren: () => import(`./pedido/pedido.module`).then(m => m.PedidoModule) },
 //{ path: 'admin', loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule) },
 //{ path: 'login', loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule) },
 { path: 'supermercados', loadChildren: './supermercados/supermercados.module#SupermercadosModule' },
 { path: 'pedidos', loadChildren: './pedido/pedido.module#PedidoModule' },
 { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
 { path: 'login', loadChildren: './login/login.module#LoginModule'},
 { path: 'error', component: ErrosComponent },
 { path: '**', component: ErrosComponent, data: { error: 404 } },
];
 
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
