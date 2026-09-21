import { Component } from '@angular/core';

@Component({
  selector: 'app-exe14',
  standalone: false,
  templateUrl: './exe14.html',
  styleUrl: './exe14.scss',
})
export class Exe14 {

  // SCRIPT DO EXE 04 - Esse comentario não é de IA kkkkk

  produto = 'teclado';
  estoque = 5;

  aumentarEstoque() {
    this.estoque++;
  }

  diminuirEstoque() {
    this.estoque--;
  }

  // SCRIPT DO EXE 06 - Esse comentario não é de IA kkkkk
 
  listaOriginal = ['Eric', 'Caio', 'Miguel', 'Arthut', 'Flavio'];

  nomes = [...this.listaOriginal];

  removerUltimo() {
    this.nomes.pop();
  }

  limparLista() {
    this.nomes = [];
  }

  restaurarLista() {
    this.nomes = [...this.listaOriginal];
  }

  // SCRIPT DO EXE 09 - Esse comentario não é de IA kkkkk


  produtos = [
    { id: 1, nome: 'Notebook Gamer', preco: 4500.00, quantidade: 0 },   
    { id: 2, nome: 'Mouse Sem Fio', preco: 120.50, quantidade: 3 },     
    { id: 3, nome: 'Teclado Mecânico', preco: 350.00, quantidade: 5 },   
    { id: 4, nome: 'Monitor 24" Full HD', preco: 980.00, quantidade: 8 }, 
    { id: 5, nome: 'Headset Bluetooth', preco: 250.00, quantidade: 15 }
  ];


  getStatusEstoque(quantidade: number): string {
    if (quantidade === 0) {
      return 'Sem estoque';
    } else if (quantidade <= 5) {
      return 'Estoque baixo';
    } else {
      return 'Estoque disponível';
    }
  }


}