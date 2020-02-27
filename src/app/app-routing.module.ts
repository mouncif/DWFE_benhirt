import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GestionDeVentesComponent } from './gestion-de-ventes/gestion-de-ventes.component';
import { UtilisateurEtDroitComponent } from './utilisateur-et-droit/utilisateur-et-droit.component';
import { ProduitComponent } from './produit/produit.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'ventes', component:  GestionDeVentesComponent },
  { path: 'droit', component: UtilisateurEtDroitComponent },
  { path: '', component: ProduitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
