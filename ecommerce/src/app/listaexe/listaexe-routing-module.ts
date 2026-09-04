import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exe01 } from './exe01/exe01';
import { Exe02 } from './exe02/exe02';
import { Exe03 } from './exe03/exe03';

const routes: Routes = [
  {
    path: 'exe01', component: Exe01
  },
  {
    path: 'exe02', component: Exe02
  },
  {
    path: 'exe03', component: Exe03
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaexeRoutingModule { }
