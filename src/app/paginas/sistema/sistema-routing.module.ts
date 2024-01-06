import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarParametroSistemaComponent } from './cadastrar-parametro-sistema/cadastrar-parametro-sistema.component';


const routes: Routes = [
  { path: 'cadastrar-parametro-sistema', component: CadastrarParametroSistemaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }
