import { Component } from '@angular/core';

@Component({
  selector: 'app-exe11',
  standalone: false,
  templateUrl: './exe11.html',
  styleUrl: './exe11.scss',
})
export class Exe11 {

  
quantidade = 0

produto = 'Teclado'

valor = 20.00

mensagem = ''

  aumentar (){
    this.quantidade++
  }

  diminuir (){
    this.quantidade--
  }

  adicionarCarrinho() {
    const total = this.quantidade * this.valor;
    this.mensagem = `Sucesso! ${this.quantidade}x ${this.produto} adicionado(s). Total: R$ ${total.toFixed(2)}`;
  }

}
