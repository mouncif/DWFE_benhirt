import { Component, OnInit } from '@angular/core';
import { Prod } from 'src/produits';
import { ServicesService } from '../services.service';
import { MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
import { ProduitService } from '../services/produit.service';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  private produit;
  produits:Prod[] = [];
  constructor(private service : ProduitService) { }

  
  ngOnInit(){
   
  }

  onSubmit(){
    
    if (!this.service.form.get("id").value){
      this.produit = this.service.form.value;
      this.service.addProduit(this.produit).subscribe((produit)=>{
        this.produits = [produit, ...this.produits];
        
    });
    }
    else {
      this.produit = this.service.form.value;
      this.service.updateProduit(this.produit).subscribe((produit)=>{
        this.produits = [produit, ...this.produits];
        
    });
    
    }
  this.service.form.reset()
  this.service.initializeFormGroup();
  window.location.reload();
  
}
  
}
