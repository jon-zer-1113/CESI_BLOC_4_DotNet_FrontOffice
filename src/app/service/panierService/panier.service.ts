import { Injectable } from '@angular/core';
import { Produit } from 'src/app/data/produit.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  produits: Produit[] = [];

  totalProduits: number = 0;

  constructor() { }

  ajouterProduit() {
    this.totalProduits++;
  }

  ajouterAuPanier(produit: Produit) {
    const produitDansPanier = this.produits.find(p => p.id === produit.id);

    if (produitDansPanier) {
      produitDansPanier.quantite += 1;
    } else {
      produit.quantite = 1;
      this.produits.push(produit);
    }
  }

  getProduits(): Produit[] {
    return this.produits;
  }
  
}