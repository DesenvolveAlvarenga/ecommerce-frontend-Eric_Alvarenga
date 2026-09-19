import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Listaexe2RoutingModule } from './listaexe2-routing-module';
import { Exe01 } from './exe01/exe01';
import { Exe02 } from './exe02/exe02';
import { Exe03 } from './exe03/exe03';
import { Exe04 } from './exe04/exe04';
import { Exe05 } from './exe05/exe05';
import { Exe06 } from './exe06/exe06';
import { Exe07 } from './exe07/exe07';

@NgModule({
  declarations: [Exe01, Exe02, Exe03, Exe04, Exe05, Exe06, Exe07],
  imports: [CommonModule, Listaexe2RoutingModule],
})
export class Listaexe2Module {}
