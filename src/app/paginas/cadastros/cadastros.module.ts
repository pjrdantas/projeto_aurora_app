import { CommonModule, DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';

import { A11yModule } from '@angular/cdk/a11y';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';

import { AngularMaterialModule } from 'src/app/angular-material.module';
import { AppComponent } from 'src/app/app.component';
import { CadastrosRoutingModule } from './cadastros-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CPFPipe } from 'src/app/shared/util/cpf.pipe';
import { SortDirective } from './sort.directive';
import { KzMaskDirective } from './kz-mask.directive';

import { DialogCondutorCadastroComponent } from './condutores/dialog-condutor-cadastro/dialog-condutor-cadastro.component';
import { DialogEmailDanfeComponent } from './email-danfe/dialog-email-danfe/dialog-email-danfe.component';
import { DialogVeiculoCadastroComponent } from './veiculos/dialog-veiculo-cadastro/dialog-veiculo-cadastro.component';
import { CondutoresComponent } from './condutores/condutores.component';
import { EmailDanfeComponent } from './email-danfe/email-danfe.component';
import { VeiculosComponent } from './veiculos/veiculos.component';

import { PermisaoComponent } from './permisao/permisao.component';
import { DialogPermissaoComponent } from './permisao/dialog-permissao/dialog-permissao.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DialogPerfilComponent } from './perfil/dialog-perfil/dialog-perfil.component';


@NgModule({
  declarations: [
    CondutoresComponent,
    DialogCondutorCadastroComponent,

    CPFPipe,
    SortDirective,
    KzMaskDirective,
    DialogVeiculoCadastroComponent,
    EmailDanfeComponent,
    DialogEmailDanfeComponent,
    VeiculosComponent,
    PermisaoComponent,
    DialogPermissaoComponent,
    PerfilComponent,
    DialogPerfilComponent,

  ],
  imports: [
    CommonModule,
    CadastrosRoutingModule,
    AngularMaterialModule,
    A11yModule,
    CdkTableModule,
    PortalModule,
    ScrollingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgbModule,
    TextMaskModule,
    Ng2SearchPipeModule,
    FontAwesomeModule,
    NgxMaskModule.forRoot()

  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }, DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CadastrosModule { }
