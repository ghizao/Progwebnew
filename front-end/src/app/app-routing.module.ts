import { NegociacaoFormComponent } from './negociacao/negociacao-form/negociacao-form.component';
import { NegociacaoListComponent } from './negociacao/negociacao-list/negociacao-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfissionalListComponent } from './profissional/profissional-list/profissional-list.component';
import { ProfissionalFormComponent } from './profissional/profissional-form/profissional-form.component';
import { ContratanteListComponent } from './contratante/contratante-list/contratante-list.component';
import { ContratanteFormComponent } from './contratante/contratante-form/contratante-form.component';
import { ValidadorListComponent } from './validador/validador-list/validador-list.component';
import { ValidadorFormComponent } from './validador/validador-form/validador-form.component';
import { EspecialidadeListComponent } from './especialidade/especialidade-list/especialidade-list.component';
import { EspecialidadeFormComponent } from './especialidade/especialidade-form/especialidade-form.component';
import { DemandaListComponent } from './demanda/demanda-list/demanda-list.component';
import { DemandaFormComponent } from './demanda/demanda-form/demanda-form.component';


const routes: Routes = [
  {
    path:'profissional',  // no algular não se usa a barra no começo da rota
    component: ProfissionalListComponent
  },
  {
    path: 'profissional/novo', // cadastrar novo profissional
    component: ProfissionalFormComponent
  },
  {
    path: 'profissional/:id', // editar profissional ja exsitente
    component: ProfissionalFormComponent
  },
  {
    path: 'negociacao',
    component: NegociacaoListComponent
  },
  {
    path: 'negociacao/novo',
    component: NegociacaoFormComponent
  },
  {
    path: 'negociacao/:id',
    component: NegociacaoFormComponent
  },
  {
    path: 'contratante',
    component: ContratanteListComponent
  },
  {
    path: 'contratante/novo',
    component: ContratanteFormComponent
  },
  {
    path: 'contratante/:id',
    component: ContratanteFormComponent
  },
  {
    path: 'validador',
    component: ValidadorListComponent
  },
  {
    path: 'validador/novo',
    component: ValidadorFormComponent
  },
  {
    path: 'validador/:id',
    component: ValidadorFormComponent
  },
  {
    path: 'especialidade',
    component: EspecialidadeListComponent
  },
  {
    path: 'especialidade/novo',
    component: EspecialidadeFormComponent
  },
  {
    path: 'especialidade/:id',
    component: EspecialidadeFormComponent
  },
  {
    path: 'demanda',
    component: DemandaListComponent
  },
  {
    path: 'demanda/novo',
    component: DemandaFormComponent
  },
  {
    path: 'demanda/:id',
    component: DemandaFormComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
