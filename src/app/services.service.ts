import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prod } from 'src/produits';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private Url = 'http://localhost:3000/produit';
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Prod[]>(this.Url);
  }
}
