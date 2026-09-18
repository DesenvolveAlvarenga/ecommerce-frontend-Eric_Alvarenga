import { Component } from '@angular/core';

@Component({
  selector: 'app-exe02',
  standalone: false,
  templateUrl: './exe02.html',
  styleUrl: './exe02.scss',
})
export class Exe02 {

  usuarioLogado: boolean = false

  alternarBotao(): void{
    this.usuarioLogado = !this.usuarioLogado
  }

}
