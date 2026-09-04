import { Component } from '@angular/core';

@Component({
  selector: 'app-exe09',
  standalone: false,
  templateUrl: './exe09.html',
  styleUrl: './exe09.scss',
})
export class Exe09 {

estoque = 0

produto = 'Mouse'

  entrada (){
    this.estoque++
  }

  saida(){
    this.estoque--
  }

}
