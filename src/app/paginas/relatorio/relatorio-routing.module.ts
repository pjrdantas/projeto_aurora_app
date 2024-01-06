import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConciliacaoNfeComponent } from './conciliacao-nfe/conciliacao-nfe.component';
import { RadarProducaoComponent } from './radar-producao/radar-producao.component';


const routes: Routes = [
  { path: 'conciliacao-nfe', component: ConciliacaoNfeComponent },
  { path: 'radar-producao', component: RadarProducaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatorioRoutingModule { }
