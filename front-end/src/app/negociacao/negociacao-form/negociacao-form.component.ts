import { DemandaService } from './../../demanda/demanda.service';
import { ProfissionalService } from 'src/app/profissional/profissional.service';
import { ContratanteService } from './../../contratante/contratante.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NegociacaoService } from 'src/app/negociacao/negociacao.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-negociacao-form',
  templateUrl: './negociacao-form.component.html',
  styleUrls: ['./negociacao-form.component.scss']
})
export class NegociacaoFormComponent implements OnInit {

  title: string = 'Nova Negociacao'

  negociacao : any = {}  // objeto vazio

  // entidade relacionadas
  contratantes : any = []
  profissionais : any = []
  demandas : any = []

  constructor(
    private negociacaoSrv : NegociacaoService,
    private contratanteSrv: ContratanteService,
    private profissionalSrv: ProfissionalService,
    private demandaSrv: DemandaService,
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
        this.negociacao = await this.negociacaoSrv.obterUm(params['id'])
        this.title = 'Atualizando Negociacao'
      }
      catch(erro) {
        this.snackBar.open(erro.message, 'Que pena!', {duration: 5000})
      }
    }

    //entidades relacionadas
    try {
      this.contratantes = await this.contratanteSrv.listar()
    }
    catch(erro){
      this.snackBar.open(erro.message, 'Que pena!', {duration: 5000})
    }

    //entidades relacionadas
    try {
      this.profissionais = await this.profissionalSrv.listar()
    }
    catch(erro){
      this.snackBar.open(erro.message, 'Que pena!', {duration: 5000})
    }
    //entidades relacionadas
    try {
      this.demandas = await this.demandaSrv.listar()
    }
    catch(erro){
      this.snackBar.open(erro.message, 'Que pena!', {duration: 5000})
    }





  }

  voltar(x) {

  }

  async salvar(form: NgForm) {
    // só tenta salvar se o form for válido
    if(form.valid) {
      try {
        let msg = 'Negociacao Atualizado com sucesso!'
        //se existir o campo _id é caso de atualização
        if (this.negociacao._id) {
          await this.negociacaoSrv.atualizar(this.negociacao)
        }
        // se não , é caso de criar um novo
        else {
          await this.negociacaoSrv.novo(this.negociacao)
          msg = 'Negociacao criado com sucesso'
        }

        this.snackBar.open(msg, 'Entendi', { duration: 5000 })
        // voltar para a listagem
        this.router.navigate(['/negociacao'])
      }
      catch(erro) {
        this.snackBar.open(erro.message, 'Que pena', { duration: 5000 })
      }
      }
  
  }
  

}