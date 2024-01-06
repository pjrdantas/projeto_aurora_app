import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'cadastros',
    loadChildren: () => import('./paginas/cadastros/cadastros.module').then(m => m.CadastrosModule )
  },
  {
    path: 'mdfe',
    loadChildren: () => import('./paginas/mdfe/mdfe.module').then(m => m.MdfeModule )
  },
  {
    path: 'nfe',
    loadChildren: () => import('./paginas/nfe/nfe.module').then(m => m.NfeModule )
  },
  {
    path: 'painelNfeManual',
    loadChildren: () => import('./paginas/painelNfeManual/painelNfeManual.module').then(m => m.PainelNfeManualModule )
  },
  {
    path: 'relatorio',
    loadChildren: () => import('./paginas/relatorio/relatorio.module').then(m => m.RelatorioModule )
  },
  {
    path: 'roteirizacao',
    loadChildren: () => import('./paginas/roteirizacao/roteirizacao.module').then(m => m.RoteirizacaoModule )
  },
  {
    path: 'sistema',
    loadChildren: () => import('./paginas/sistema/sistema.module').then(m => m.SistemaModule )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

