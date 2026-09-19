import { Component } from '@angular/core';

@Component({
  selector: 'app-exe09',
  standalone: false,
  templateUrl: './exe09.html',
  styleUrl: './exe09.scss',
})
export class Exe09 {

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