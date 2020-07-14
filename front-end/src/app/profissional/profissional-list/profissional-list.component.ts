import { Component, OnInit } from '@angular/core';
import { ProfissionalService, Profissional } from '../profissional.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDlgComponent } from 'src/app/ui/confirm-dlg/confirm-dlg.component';


@Component({
  selector: 'app-profissional-list',
  templateUrl: './profissional-list.component.html',
  styleUrls: ['./profissional-list.component.scss']
})
export class ProfissionalListComponent implements OnInit {

 title: string = 'Novo Profissional'
 
 profissionais: any = [] // vetor vazio

  displayedColumns: string[] = ['nome', 'especialidade','cpf','telefone', 'email', 'editar', 'excluir']

  constructor(
    private profissionalSrv : ProfissionalService,
    private snackBar : MatSnackBar,
    private dialog: MatDialog    
    ) { }

  async ngOnInit() {
    this.profissionais = await this.profissionalSrv.listar();
    console.log(this.profissionais)
  }

  async excluirItem(id: string) {
    const dialogRef = this.dialog.open(ConfirmDlgComponent, {
      width: '50%',
      data: {question: 'Deseja realmente excluir este profissional?'}
    });

    let result = await dialogRef.afterClosed().toPromise();

    //if(confirm('Deseja realmente excluir este item?')) {
    if(result) {
    
          try {
        
        await this.profissionalSrv.excluir(id)
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