import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaexeRoutingModule } from './listaexe-routing-module';
import { Exe01 } from './exe01/exe01';
import { Exe02 } from './exe02/exe02';
import { Exe03 } from './exe03/exe03';
import { Exe04 } from './exe04/exe04';

@NgModule({
  declarations: [Exe01, Exe02, Exe03, Exe04],
  imports: [CommonModule, ListaexeRoutingModule, FormsModule],
})
export class ListaexeModule {}
