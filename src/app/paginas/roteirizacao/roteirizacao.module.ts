import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerarRoteirizacaoComponent } from './gerar-roteirizacao/gerar-roteirizacao.component';
import { RoteirizacaoRoutingModule } from './roteirizacao-routing.module';

@NgModule({
  declarations: [
    GerarRoteirizacaoComponent
  ],
  imports: [
    CommonModule,
    RoteirizacaoRoutingModule
  ],

})
export class RoteirizacaoModule { }
