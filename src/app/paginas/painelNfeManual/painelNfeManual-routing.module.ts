import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelNfeManualComponent } from './painel-nfe-manual/painel-nfe-manual.component';



const routes: Routes = [
  { path: 'painel-nfe-manual', component: PainelNfeManualComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainelNfeManualRoutingModule { }
