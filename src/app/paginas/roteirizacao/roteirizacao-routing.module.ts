import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerarRoteirizacaoComponent } from './gerar-roteirizacao/gerar-roteirizacao.component';


const routes: Routes = [
  { path: 'gerar-roteirizacao', component: GerarRoteirizacaoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoteirizacaoRoutingModule { }
