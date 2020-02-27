import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestionDeVentesComponent } from './gestion-de-ventes/gestion-de-ventes.component';
import { UtilisateurEtDroitComponent } from './utilisateur-et-droit/utilisateur-et-droit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { ProduitComponent } from './produit/produit.component';
import { from } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GestionDeVentesComponent,
    UtilisateurEtDroitComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
