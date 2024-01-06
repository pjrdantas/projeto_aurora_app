import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConciliacaoNfeComponent } from './conciliacao-nfe/conciliacao-nfe.component';
import { RadarProducaoComponent } from './radar-producao/radar-producao.component';
import { RelatorioRoutingModule } from './relatorio-routing.module';

@NgModule({
  declarations: [
    ConciliacaoNfeComponent,
    RadarProducaoComponent
  ],
  imports: [
    CommonModule,
    RelatorioRoutingModule
  ],

})
export class RelatorioModule { }
