import { environment as env } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Profissional {
  nome: string
  cnpj_cpf: string
  telefone: string
  email: string
}

@Injectable({
  providedIn: 'root'
})

export class ProfissionalService {

  //Injeção de Dependencis: em vez de criarmos
  //normalmente as Dependencoas necessárias
  //o proprio Angular  as cria  e Injeta  o objeto ja estanciada como paramentro do construtor
  constructor(private http: HttpClient) { }

  private apiUri : string = env.apiBaseUri + 'profissional'

  listar() {
      return this.http.get(this.apiUri).toPromise()
}

  excluir(id: string) {
    return this.http.request('DELETE', this.apiUri,
      {body: {_id: id }}).toPromise()
  }

  novo(body : any) {
    return this.http.post(this.apiUri, body).toPromise()
  }

  atualizar(body : any) {
    return this.http.put(this.apiUri, body).toPromise()
  }

obterUm(id: string) {
  return this.http.get(this.apiUri + '/' + id).toPromise
}


}