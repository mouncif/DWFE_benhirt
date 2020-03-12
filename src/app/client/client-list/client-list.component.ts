import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ClientService } from 'src/app/services/client.service';
import { ClientComponent } from '../client.component';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  private dataSource;
  private dialog: MatDialog;
  displayedColumns  = ['id', 'nomc', 'prenomc','statusc','photoc', 'telc', 'emailc', 'adressec', 'villec','actions'];
   constructor(private service: ClientService , private dialogue: MatDialog) { }
   
   ngOnInit() {
     this.dataSource = this.service.getAll();
 }
  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '70%';
    this.dialogue.open(ClientComponent, dialogConfig);
  }

  onEdit(row) {
    this.service.fillFormGroup(row)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '70%';
    this.dialogue.open(ClientComponent, dialogConfig);
  }

  onDelete(id) {
    if (confirm('Vous êtes sur le point de supprimer un enregistrement. Etes vous sûrs ?')){
      //console.log(id);
      this.service.deleteClient(id).subscribe(() => {
    });
    }
    this.dataSource = this.service.getAll();
}

}
