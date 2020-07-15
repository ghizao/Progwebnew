import { NgxMaskModule } from 'ngx-mask';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainToolbarComponent } from './ui/main-toolbar/main-toolbar.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfissionalListComponent } from './profissional/profissional-list/profissional-list.component';
import { ConfirmDlgComponent } from './ui/confirm-dlg/confirm-dlg.component';
import { FormsModule } from '@angular/forms';
import { ProfissionalFormComponent } from './profissional/profissional-form/profissional-form.component';

// Habilitar formatação de moeda e data em português
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

/**** Datas em português no MatDatepicker  ****/

// É preciso instalar os seguintes pacotes:
// yarn add @angular/material-moment-adapter moment

import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { ContratanteListComponent } from './contratante/contratante-list/contratante-list.component';
import { ContratanteFormComponent } from './contratante/contratante-form/contratante-form.component';
import { ValidadorListComponent } from './validador/validador-list/validador-list.component';
import { ValidadorFormComponent } from './validador/validador-form/validador-form.component';
import { NegociacaoListComponent } from './negociacao/negociacao-list/negociacao-list.component';
import { NegociacaoFormComponent } from './negociacao/negociacao-form/negociacao-form.component';
import { DemandaListComponent } from './demanda/demanda-list/demanda-list.component';
import { DemandaFormComponent } from './demanda/demanda-form/demanda-form.component';
import { EspecialidadeListComponent } from './especialidade/especialidade-list/especialidade-list.component';
import { EspecialidadeFormComponent } from './especialidade/especialidade-form/especialidade-form.component';


/**********************************************/

@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    MainMenuComponent,
    MainFooterComponent,
    ProfissionalListComponent,
    ConfirmDlgComponent,
    ProfissionalFormComponent,
    ContratanteListComponent,
    ContratanteFormComponent,
    ValidadorListComponent,
    ValidadorFormComponent,
    NegociacaoListComponent,
    NegociacaoFormComponent,
    DemandaListComponent,
    DemandaFormComponent,
    EspecialidadeListComponent,
    EspecialidadeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    MaterialModule,
    NgxMaskModule.forRoot(),
    /**** Datas em português no MatDatepicker  ****/
    MatMomentDateModule
    /**********************************************/
  ],
  providers: [
    /**** Datas em português no MatDatepicker  ****/
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
    /**********************************************/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
