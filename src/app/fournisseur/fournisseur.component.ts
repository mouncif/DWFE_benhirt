//Fatima Zahra BENHIRT
import { Component, OnInit } from '@angular/core';
import { FournisseurService } from '../services/fournisseur.service';
import { Fournisseur } from 'src/fournisseurs';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  private fournisseur;
  fournisseurs:Fournisseur[] = [];
  constructor(private service : FournisseurService) { }

  
  ngOnInit(){
   
  }

  onSubmit(){
    
    if (!this.service.form.get("id").value){
      this.fournisseur = this.service.form.value;
      this.service.addFournisseur(this.fournisseur).subscribe((fournisseur)=>{
        this.fournisseurs = [fournisseur, ...this.fournisseurs];
        
    });
    }
    else {
      this.fournisseur = this.service.form.value;
      this.service.updateFournisseur(this.fournisseur).subscribe((fournisseur)=>{
        this.fournisseurs = [fournisseur, ...this.fournisseurs];
        
    });
    
    }
  this.service.form.reset()
  this.service.initializeFormGroup();
  window.location.reload();
  
}
  
}
