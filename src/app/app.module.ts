import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularMaterialModule } from './angular-material.module';
import { CommonModule, DatePipe } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkTableModule } from '@angular/cdk/table';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import Localept from '@angular/common/locales/pt';
registerLocaleData(Localept);

import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMaskModule } from 'ngx-mask';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { MenuComponent } from './paginas/menu/menu.component';
import { SidenavComponent } from './paginas/sidenav/sidenav.component';
import { SublevelMenuComponent } from './paginas/sidenav/sublevel-menu.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { ConfigService } from './services/config.service';
import { BodyComponent } from './shared/body/body.component';
import { ErrorDialogComponent } from './shared/error-dialog/error-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    SublevelMenuComponent,
    ErrorDialogComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AppRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgbModule,
    CommonModule,
    A11yModule,
    CdkTableModule,
    PortalModule,
    ScrollingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxMaskModule,
    Ng2SearchPipeModule,

  ],
  exports: [
    ErrorDialogComponent,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }, ConfigService, DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
