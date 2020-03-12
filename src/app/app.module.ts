import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ProduitComponent } from './produit/produit.component';
import { from } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ClientComponent } from './client/client.component';
import { ProduitListComponent } from './produit/produit-list/produit-list.component';
import { ProduitService } from './services/produit.service';
import { FournisseurService } from './services/fournisseur.service';
import { ClientService } from './services/client.service';
import { FournisseurListComponent } from './fournisseur/fournisseur-list/fournisseur-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    MainNavComponent,
    FournisseurComponent,
    ClientComponent,
    ProduitListComponent,
    FournisseurListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    

  ],
  providers: [ProduitService, FournisseurService, ClientService],
  bootstrap: [AppComponent],
  entryComponents:[ProduitComponent, FournisseurComponent, ClientComponent]
})
export class AppModule { }
