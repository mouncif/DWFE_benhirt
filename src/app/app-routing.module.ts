import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitListComponent } from './produit/produit-list/produit-list.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { FournisseurListComponent } from './fournisseur/fournisseur-list/fournisseur-list.component';



const routes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'produits', component: ProduitListComponent },
  { path: 'fournisseurs', component: FournisseurListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
