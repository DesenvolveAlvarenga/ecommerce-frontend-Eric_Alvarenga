import { Component } from '@angular/core';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean; 
}

@Component({
  selector: 'app-exe10',
  standalone: false,
  templateUrl: './exe10.html',
  styleUrl: './exe10.scss',
})
export class Exe10 {

  produtos: Produto[] = [
    { id: 1, nome: 'Notebook Gamer', preco: 4500.00, quantidade: 5, promocao: true },
    { id: 2, nome: 'Mouse Sem Fio', preco: 120.50, quantidade: 25, promocao: false },
    { id: 3, nome: 'Teclado Mecânico', preco: 350.00, quantidade: 12, promocao: true },
    { id: 4, nome: 'Monitor 24" Full HD', preco: 980.00, quantidade: 8, promocao: false },
    { id: 5, nome: 'Headset Bluetooth', preco: 250.00, quantidade: 15, promocao: true }
  ];


  alternarPromocao(produto: Produto): void {
    produto.promocao = !produto.promocao;
  }

}