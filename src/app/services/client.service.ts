import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Client } from 'src/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private Url = 'http://localhost:3000/clients';
  constructor(private http: HttpClient) { }
  form : FormGroup = new FormGroup({
    id :new FormControl(null),
    nomc :new FormControl('',Validators.required),
    prenomc: new FormControl(''),
    statusc :  new FormControl(0,Validators.required),
    photoc : new FormControl(''),
    telc  :new FormControl(0,[ ]),
    emailc:new FormControl(0,[Validators.required]),
    adressec : new FormControl(0,[Validators.required]),
    villec : new FormControl(0,[Validators.required])

  });
  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nomc: '',
      prenomc: '',
      statusc: '',
      photoc: '',
      telc: 0,
      emailc: '',
      adressec: '',
      villec: ''
    });
}  

fillFormGroup(c){
  this.form.setValue(c);

}
  getAll(){
    return this.http.get<Client[]>(this.Url);
  }
  addClient(c){
    return this.http.post<Client>(this.Url,c);
  }
  deleteClient(id){
    return this.http.delete<Client>(`${this.Url}/${id}`);
  }
  updateClient(c){
    return this.http.put<Client>(`${this.Url}/${c.id}`,c);
  }
}

