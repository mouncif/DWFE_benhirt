import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prod } from 'src/produits';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private Url = 'http://localhost:3000/produits';
  constructor(private http: HttpClient) { }
  form : FormGroup = new FormGroup({
    id :new FormControl(null),
    nom :new FormControl('',Validators.required),
    nomcourt : new FormControl(''),
    prixb :  new FormControl(0,Validators.required),
    prixv : new FormControl(0,Validators.required),
    seuilmax  :new FormControl(0,[ ]),
    unite:new FormControl(0,[Validators.required]),
    qinit : new FormControl(0,[Validators.required]),
    qtactu : new FormControl(0,[Validators.required])

  });
  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nom: '',
      nomcourt: '',
      prixb: 0,
      prixv: 0,
      seuilmax: 0,
      unite: 0,
      qinit: 0,
      qtactu: 0
    });
}  

fillFormGroup(p){
  this.form.setValue(p);

}
  getAll(){
    return this.http.get<Prod[]>(this.Url);
  }
  addProduit(p){
    return this.http.post<Prod>(this.Url,p);
  }
  deleteProduit(id){
    return this.http.delete<Prod>(`${this.Url}/${id}`);
  }
  updateProduit(p){
    return this.http.put<Prod>(`${this.Url}/${p.id}`,p);
  }
}
