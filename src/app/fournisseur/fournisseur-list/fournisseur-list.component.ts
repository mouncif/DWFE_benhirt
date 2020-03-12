import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { FournisseurComponent } from '../fournisseur.component';

@Component({
  selector: 'app-fournisseur-list',
  templateUrl: './fournisseur-list.component.html',
  styleUrls: ['./fournisseur-list.component.css']
})
export class FournisseurListComponent implements OnInit {
  private dataSource;
  private dialog: MatDialog;
  displayedColumns  = ['id', 'nomf', 'nomcourtf','villef','adressef', 'telfixf', 'telmobilef', 'faxf', 'emailf','actions'];
   constructor(private service: FournisseurService , private dialogue: MatDialog) { }
   
   ngOnInit() {
     this.dataSource = this.service.getAll();
 }
  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '70%';
    this.dialogue.open(FournisseurComponent, dialogConfig);
  }

  onEdit(row) {
    this.service.fillFormGroup(row)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '70%';
    this.dialogue.open(FournisseurComponent, dialogConfig);
  }

  onDelete(id) {
    if (confirm('Vous êtes sur le point de supprimer un enregistrement. Etes vous sûrs ?')){
      this.service.deleteFournisseur(id).subscribe(() => {
    });
    }
    this.dataSource = this.service.getAll();
}
}
