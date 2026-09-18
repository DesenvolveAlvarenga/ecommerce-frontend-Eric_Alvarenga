import { Component } from '@angular/core';

@Component({
  selector: 'app-exe04',
  standalone: false,
  templateUrl: './exe04.html',
  styleUrl: './exe04.scss',
})
export class Exe04 {

  produto = "teclado"

  estoque = 5

  aumentarEstoque(){
    this.estoque++
  }

  diminuirEstoque(){
    this.estoque--
  }
}
