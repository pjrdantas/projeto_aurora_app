import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerarMdfeComponent } from './gerar-mdfe/gerar-mdfe.component';
import { PainelMdfeComponent } from './painel-mdfe/painel-mdfe.component';


const routes: Routes = [
  { path: 'gerar-mdfe', component: GerarMdfeComponent },
  { path: 'painel-mdfe', component: PainelMdfeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MdfeRoutingModule { }
