import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exe01 } from './exe01/exe01';
import { Exe02 } from './exe02/exe02';
import { Exe03 } from './exe03/exe03';
import { Exe04 } from './exe04/exe04';
import { Exe05 } from './exe05/exe05';
import { Exe06 } from './exe06/exe06';
import { Exe07 } from './exe07/exe07';
import { Exe08 } from './exe08/exe08';

const routes: Routes = [
  {
    path: 'exe01', component: Exe01
  },
  {
    path: 'exe02', component: Exe02
  },
  {
    path: 'exe03', component: Exe03
  },
  {
    path: 'exe04', component: Exe04
  }, {
    path: 'exe05', component: Exe05
  },{
    path: 'exe06', component: Exe06
  },
  {
    path: 'exe07', component: Exe07
  },{
    path: 'exe08', component: Exe08
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaexeRoutingModule { }
