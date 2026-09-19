import { Component } from '@angular/core';

@Component({
  selector: 'app-exe08',
  standalone: false,
  templateUrl: './exe08.html',
  styleUrl: './exe08.scss',
})
export class Exe08 {

  produtos = [
    { id: 1, nome: 'Notebook Gamer', preco: 4500.00, quantidade: 5 },
    { id: 2, nome: 'Mouse Sem Fio', preco: 120.50, quantidade: 25 },
    { id: 3, nome: 'Teclado Mecânico', preco: 350.00, quantidade: 12 },
    { id: 4, nome: 'Monitor 24" Full HD', preco: 980.00, quantidade: 8 },
    { id: 5, nome: 'Headset Bluetooth', preco: 250.00, quantidade: 15 }
  ];

}
