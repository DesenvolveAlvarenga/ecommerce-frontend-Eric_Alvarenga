import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Listaexe2RoutingModule } from './listaexe2-routing-module';
import { Exe01 } from './exe01/exe01';
import { Exe02 } from './exe02/exe02';

@NgModule({
  declarations: [Exe01, Exe02],
  imports: [CommonModule, Listaexe2RoutingModule],
})
export class Listaexe2Module {}
