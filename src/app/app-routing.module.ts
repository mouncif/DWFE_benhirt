import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitListComponent } from './produit/produit-list/produit-list.component';



const routes: Routes = [
  //{ path: 'login', component: LoginComponent },
  //{ path: 'produitlist', component: ProduitListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
