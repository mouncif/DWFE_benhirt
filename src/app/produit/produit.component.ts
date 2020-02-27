import { Component, OnInit } from '@angular/core';
import { Prod } from 'src/produits';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
 private dataSource;
 displayedColumns  = ['nom', 'nomcourt','prixb','prixv', 'seuilmax', 'unite', 'image', 'qinit', 'qtactu'];
  constructor(private service : ServicesService) { }

  
  ngOnInit() {
    this.dataSource=this.service.getAll();
}
}
