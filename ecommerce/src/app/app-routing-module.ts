import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'categoria',
    loadChildren: () => import('./categoria/categoria-module').then(m => m.CategoriaModule)
  }, {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos-module').then(m => m.ProdutosModule)
  }, {
    path: 'listaexe',
    loadChildren: ()=> import('./listaexe/listaexe-module').then(m => m.ListaexeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
