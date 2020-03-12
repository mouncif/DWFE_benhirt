import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Fournisseur } from 'src/fournisseurs';


@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private Url = 'http://localhost:3000/fournisseurs';
  constructor(private http: HttpClient) { }
  form : FormGroup = new FormGroup({
    id :new FormControl(null),
    nomf :new FormControl('',Validators.required),
    nomcourtf : new FormControl(''),
    villef :  new FormControl(0,Validators.required),
    adressef : new FormControl(0,Validators.required),
    telfixf  :new FormControl(0,[ ]),
    telmobilef:new FormControl(0,[Validators.required]),
    faxf : new FormControl(0,[Validators.required]),
    emailf : new FormControl(0,[Validators.required])

  });
  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nomf: '',
      nomcourtf: '',
      villef: '',
      adressef: '',
      telfixf: '',
      telmobilef: '',
      faxf: '',
      emailf: ''
    });
}  

fillFormGroup(f){
  this.form.setValue(f);

}
  getAll(){
    return this.http.get<Fournisseur[]>(this.Url);
  }
  addFournisseur(f){
    return this.http.post<Fournisseur>(this.Url,f);
  }
  deleteFournisseur(id){
    return this.http.delete<Fournisseur>(`${this.Url}/${id}`);
  }
  updateFournisseur(f){
    return this.http.put<Fournisseur>(`${this.Url}/${f.id}`,f);
  }
}

