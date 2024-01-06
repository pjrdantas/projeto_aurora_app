import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { NfeRoutingModule } from './nfe-routing.module';

@NgModule({
  declarations: [
    AtualizarNfeTransferenciaOnofreComponent,
    EnviarArquivoXmlComponent,
    EnviarDanfeVerdeComponent,
    EscanearRgProdutoComponent,
    GerarNfTransferenciaImpropioComponent,
    GerarNfeComponent,
    GerarNfeManualComponent,
    MonitoramentoRotasComponent,
    NfeTransferenciaOnofreComponent,
    PainelNfeComponent,
  ],
  imports: [
    CommonModule,
    NfeRoutingModule,

  ],

})
export class NfeModule { }
