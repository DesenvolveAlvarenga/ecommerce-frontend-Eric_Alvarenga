import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Listaexe2RoutingModule } from './listaexe2-routing-module';
import { Exe01 } from './exe01/exe01';

@NgModule({
  declarations: [Exe01],
  imports: [CommonModule, Listaexe2RoutingModule],
})
export class Listaexe2Module {}
