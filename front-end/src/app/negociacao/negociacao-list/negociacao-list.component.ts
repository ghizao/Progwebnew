import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDlgComponent } from 'src/app/ui/confirm-dlg/confirm-dlg.component';
import { NegociacaoService } from '../negociacao.service';


@Component({
  selector: 'app-negociacao-list',
  templateUrl: './negociacao-list.component.html',
  styleUrls: ['./negociacao-list.component.scss']
})
export class NegociacaoListComponent implements OnInit {

 title: string = 'Nova Negociacao'
 
 negociacoes: any = [] // vetor vazio

  displayedColumns: string[] = ['num_negociacao', 'data_negociacao', 'forma_pagamento','data_pagamento',
  'valor_negociado', 'contratante', 'profissional','demanda','editar', 'excluir']

  constructor(
    private negociacaoSrv : NegociacaoService,
    private snackBar : MatSnackBar,
    private dialog: MatDialog    
    ) { }

  async ngOnInit() {
    this.negociacoes = await this.negociacaoSrv.listar();
    console.log(this.negociacoes)
  }

  async excluirItem(id: string) {
    const dialogRef = this.dialog.open(ConfirmDlgComponent, {
      width: '50%',
      data: {question: 'Deseja realmente excluir este negociacao?'}
    });

    let result = await dialogRef.afterClosed().toPromise();

    //if(confirm('Deseja realmente excluir este item?')) {
    if(result) {
    
          try {
        
        await this.negociacaoSrv.excluir(id)
        this.ngOnInit()// atualizar os dados da tabela
        //alert('Exclusão efetuada com sucesso!')  
        this.snackBar.open('Exclusão efetuada com sucesso!', 'Entendi',
          {duration: 5000});
      }

      catch(erro) {
        //alert('ERRO: não foi possivel excluir este item.')
        this.snackBar.open('ERRO: não foi possivel excluir este item.', 'Que pena!',
          {duration: 5000});

      }
      
    }
  }
}