import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { ProduitService } from 'src/app/services/produit.service';
import { MatDialogConfig, MatDialog, MatDialogModule } from '@angular/material';
import { ProduitComponent } from '../produit.component';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
  private dataSource;
  private dialog: MatDialog;
  displayedColumns  = ['id', 'nom', 'nomcourt','prixb','prixv', 'seuilmax', 'unite', 'qinit', 'qtactu','actions'];
   constructor(private service: ProduitService , private dialogue: MatDialog) { }
   
   ngOnInit() {
     this.dataSource = this.service.getAll();
 }
  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '70%';
    this.dialogue.open(ProduitComponent, dialogConfig);
  }

  onEdit(row) {
    this.service.fillFormGroup(row)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '70%';
    this.dialogue.open(ProduitComponent, dialogConfig);
  }

  onDelete(id) {
    if (confirm('Vous êtes sur le point de supprimer un enregistrement. Etes vous sûrs ?')){
      //console.log(id);
      this.service.deleteProduit(id).subscribe(() => {
    });
    }
    this.dataSource = this.service.getAll();
}
}
