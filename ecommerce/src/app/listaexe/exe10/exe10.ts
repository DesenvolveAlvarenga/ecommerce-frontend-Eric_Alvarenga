import { Component } from '@angular/core';

@Component({
  selector: 'app-exe10',
  standalone: false,
  templateUrl: './exe10.html',
  styleUrl: './exe10.scss',
})
export class Exe10 {
  emailUser = ''
  passwordUser = ''

  email = 'eric@gmail.com'
  password = 'eric123'

  retorno = ''

  login (){
    if(this.emailUser === this.email && this.passwordUser === this.password){
      this.retorno = 'Login Aprovado'
    } else {
      this.retorno = 'Email ou senha incorreto'
    }

    
  }
}
