import { Component } from '@angular/core';

@Component({
  selector: 'app-exe05',
  standalone: false,
  templateUrl: './exe05.html',
  styleUrl: './exe05.scss',
})
export class Exe05 {

  curtida = 0;

  curtir (){
    this.curtida++
  }


}
