import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfissionalService } from 'src/app/profissional/profissional.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profissional-form',
  templateUrl: './profissional-form.component.html',
  styleUrls: ['./profissional-form.component.scss']
})
export class ProfissionalFormComponent implements OnInit {

  title: string = 'Novo Profissional'

  profissional : any = {}  // objeto vazio

  constructor(
    private profissionalSrv : ProfissionalService,
    private snackBar : MatSnackBar,
    private router : Router,
    private actRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    //capturando os parametos da rota
    let params = this.actRoute.snapshot.params

    //existe um parâmetro chamado: id?
    if(params['id']) {
      //é caso de atualçização, É necessário consultar o back-end
      //para recuperar o registro e coloca-lo para edição
      try {
        this.profissional = await this.profissionalSrv.obterUm(params['id'])
        this.title = 'Atualizando Profissional'
      }
      catch(erro) {
        this.snackBar.open(erro.message, 'Que pena!', {duration: 5000})
      }
    }
  }

  voltar(x) {

  }

  async salvar(form: NgForm) {
    // só tenta salvar se o form for válido
    if(form.valid) {
      try {
        let msg = 'Profissional Atualizado com sucesso!'
        //se existir o campo _id é caso de atualização
        if (this.profissional._id) {
          await this.profissionalSrv.atualizar(this.profissional)
        }
        // se não , é caso de criar um novo
        else {
          await this.profissionalSrv.novo(this.profissional)
          msg = 'Profissional criado com sucesso'
        }

        this.snackBar.open(msg, 'Entendi', { duration: 5000 })
        // voltar para a listagem
        this.router.navigate(['/profissional'])
      }
      catch(erro) {
        this.snackBar.open(erro.message, 'Que pena', { duration: 5000 })
      }
      }
  
  }
  

}