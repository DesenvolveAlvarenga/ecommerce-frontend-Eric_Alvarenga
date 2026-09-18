import { Component } from '@angular/core';

@Component({
  selector: 'app-exe03',
  standalone: false,
  templateUrl: './exe03.html',
  styleUrl: './exe03.scss',
})
export class Exe03 {
  idade = 0;

  aumentarIdade(){
    this.idade++
  }

  diminuirIdade(){
    this.idade--
  }
}
