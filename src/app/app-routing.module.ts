import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientiComponent } from './Page/clienti/clienti.component';
import { PagamentiComponent } from './Page/pagamenti/pagamenti.component';
import { ContrattiComponent } from './Page/contratti/contratti.component';
const routes: Routes = [
  {
    path: 'cliente',
    component: ClientiComponent
  },
  {
    path: 'contratto',
    component: ContrattiComponent
  },
  {
    path: 'pagamento',
    component: PagamentiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
