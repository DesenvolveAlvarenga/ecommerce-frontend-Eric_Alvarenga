import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exe01 } from './exe01/exe01';

const routes: Routes = [
  {
    path: 'exe01', component: Exe01
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaexeRoutingModule {}
