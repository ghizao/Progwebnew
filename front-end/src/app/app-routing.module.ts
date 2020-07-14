import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfissionalListComponent } from './profissional/profissional-list/profissional-list.component';
import { ProfissionalFormComponent } from './profissional/profissional-form/profissional-form.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
