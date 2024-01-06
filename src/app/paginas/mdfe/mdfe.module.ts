import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerarMdfeComponent } from './gerar-mdfe/gerar-mdfe.component';
import { PainelMdfeComponent } from './painel-mdfe/painel-mdfe.component';
import { MdfeRoutingModule } from './mdfe-routing.module';


@NgModule({
  declarations: [
    GerarMdfeComponent,
    PainelMdfeComponent
  ],
  imports: [
    CommonModule,
    MdfeRoutingModule
  ],

})
export class MdfeModule { }
