import { Component } from '@angular/core';

@Component({
  selector: 'app-exe01',
  standalone: false,
  templateUrl: './exe01.html',
  styleUrl: './exe01.scss',
})
export class Exe01 {
  mensagemVisivel:  boolean = true

  alternarMensagem(): void {
    this.mensagemVisivel = !this.mensagemVisivel;
  }


}
