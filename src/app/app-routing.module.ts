import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'', pathMatch: 'full', redirectTo: 'clientes' //ja abre redirecionando pra pagina de clientes
  },
    {path:'clientes',loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule) }, 
    //{path:'fornecs',loadChildren: () => import('./clientes/clientes.module').then(m => m.CursosModule) }, 
    
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



