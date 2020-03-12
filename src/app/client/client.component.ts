import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from 'src/clients';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  private client;
  clients: Client[] = [];
  constructor(private service : ClientService) { }

  
  ngOnInit(){
   
  }

  onSubmit(){
    
    if (!this.service.form.get("id").value){
      this.client = this.service.form.value;
      this.service.addClient(this.client).subscribe((client)=>{
        this.clients = [client, ...this.clients];
        
    });
    }
    else {
      this.client = this.service.form.value;
      this.service.updateClient(this.client).subscribe((client)=>{
        this.clients = [client, ...this.clients];
        
    });
    
    }
    this.service.form.reset()
    this.service.initializeFormGroup();
    window.location.reload();
  
}

  

}
