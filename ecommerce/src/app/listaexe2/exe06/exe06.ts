import { Component } from '@angular/core';

@Component({
  selector: 'app-exe06',
  standalone: false,
  templateUrl: './exe06.html',
  styleUrl: './exe06.scss',
})
export class Exe06 {
   listaOriginal = ['Eric', 'Caio', 'Miguel', 'Arthut', 'Flavio']

  nomes = [...this.listaOriginal];

  removerUltimo(){
    this.nomes.pop()
  }

  limparLista(){
    this.nomes = []
  }

  restaurarLista(){
    this.nomes = [...this.listaOriginal]
  }
   
   
}
