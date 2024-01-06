import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelNfeManualComponent } from './painel-nfe-manual/painel-nfe-manual.component';
import { PainelNfeManualRoutingModule } from './painelNfeManual-routing.module';

@NgModule({
  declarations: [
    PainelNfeManualComponent
  ],
  imports: [
    CommonModule,
    PainelNfeManualRoutingModule
  ],

})
export class PainelNfeManualModule { }
