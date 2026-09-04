import { Component } from '@angular/core';

@Component({
  selector: 'app-exe06',
  standalone: false,
  templateUrl: './exe06.html',
  styleUrl: './exe06.scss',
})
export class Exe06 {
  curtida = 0

  curtir (){
    this.curtida++
  }

  descurtir(){
    this.curtida--
  }
}
