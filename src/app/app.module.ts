import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestionDeVentesComponent } from './gestion-de-ventes/gestion-de-ventes.component';
import { UtilisateurEtDroitComponent } from './utilisateur-et-droit/utilisateur-et-droit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { Message } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionDeVentesComponent,
    UtilisateurEtDroitComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    Message
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
