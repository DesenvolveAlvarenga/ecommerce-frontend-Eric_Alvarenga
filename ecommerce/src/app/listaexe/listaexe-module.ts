import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaexeRoutingModule } from './listaexe-routing-module';
import { Exe01 } from './exe01/exe01';

@NgModule({
  declarations: [Exe01],
  imports: [CommonModule, ListaexeRoutingModule, FormsModule],
})
export class ListaexeModule {}
