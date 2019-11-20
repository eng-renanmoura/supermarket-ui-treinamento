import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrosComponent } from './erros/erros/erros.component';
 

const routes: Routes = [
 { path: 'admin', loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule) },
 { path: 'login', loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule) },
 { path: 'error', component: ErrosComponent },
 { path: '**', component: ErrosComponent, data: { error: 404 } },
];
 
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
