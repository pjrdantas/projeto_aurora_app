import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrarParametroSistemaComponent } from './cadastrar-parametro-sistema/cadastrar-parametro-sistema.component';
import { SistemaRoutingModule } from './sistema-routing.module';

@NgModule({
  declarations: [
    CadastrarParametroSistemaComponent
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule
  ],

})
export class SistemaModule { }
