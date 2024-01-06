import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarNfeTransferenciaOnofreComponent } from './atualizar-nfe-transferencia-onofre/atualizar-nfe-transferencia-onofre.component';
import { EnviarArquivoXmlComponent } from './enviar-arquivo-xml/enviar-arquivo-xml.component';
import { EnviarDanfeVerdeComponent } from './enviar-danfe-verde/enviar-danfe-verde.component';
import { EscanearRgProdutoComponent } from './escanear-rg-produto/escanear-rg-produto.component';
import { GerarNfTransferenciaImpropioComponent } from './gerar-nf-transferencia-impropio/gerar-nf-transferencia-impropio.component';
import { GerarNfeManualComponent } from './gerar-nfe-manual/gerar-nfe-manual.component';
import { GerarNfeComponent } from './gerar-nfe/gerar-nfe.component';
import { MonitoramentoRotasComponent } from './monitoramento-rotas/monitoramento-rotas.component';
import { NfeTransferenciaOnofreComponent } from './nfe-transferencia-onofre/nfe-transferencia-onofre.component';
import { PainelNfeComponent } from './painel-nfe/painel-nfe.component';



const routes: Routes = [
  { path: 'atualizar-nfe-transferencia-onofre', component: AtualizarNfeTransferenciaOnofreComponent },
  { path: 'enviar-arquivo-xml', component: EnviarArquivoXmlComponent },
  { path: 'enviar-danfe-verde', component: EnviarDanfeVerdeComponent },
  { path: 'escanear-rg-produto', component: EscanearRgProdutoComponent },
  { path: 'gerar-nf-transferencia-impropio', component: GerarNfTransferenciaImpropioComponent },
  { path: 'gerar-nfe', component: GerarNfeComponent },
  { path: 'gerar-nfe-manual', component: GerarNfeManualComponent },
  { path: 'monitoramento-rotas', component: MonitoramentoRotasComponent },
  { path: 'nfe-transferencia-onofre', component: NfeTransferenciaOnofreComponent },
  { path: 'painel-nfe', component: PainelNfeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NfeRoutingModule { }
