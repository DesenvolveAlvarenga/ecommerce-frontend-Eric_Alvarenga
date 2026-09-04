import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio',
  standalone: false,
  templateUrl: './desafio.html',
  styleUrl: './desafio.scss',
})
export class Desafio {

  nome = ''
  materia = 0
  mensagem = ''

  matricula (){
    this.mensagem = this.nome +  '! Matricula realizada com sucesso! Você tem ' + this.materia + ' materias'
  }

  
mais(){
  this.materia++
}

menos(){
  this.materia--
}

}
