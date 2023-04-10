import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit, Sort } from 'src/app/data/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produitGetAll = 'https://localhost:7141/api/Produit';

  constructor(private http: HttpClient) { }

  getProduits(sortid?: number): Observable<any> {
    let url = this.produitGetAll;
    if (sortid) {
        url += '?sortid=' + sortid;
    }
    return this.http.get(url);
}

  getTypes(): Observable<Sort[]> {
    return this.http.get<Sort[]>('https://localhost:7141/api/Sort');
  }
  
  getProduitsParType(sortId: number): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.produitGetAll}?sortId=${sortId}`);
  }

  getProduitsParSortid(sortId: number): Observable<any> {
    const url = `${this.produitGetAll}?sortid=${sortId}`;
    return this.http.get(url);
  }
  
}
