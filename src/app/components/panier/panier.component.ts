import { Component, OnInit } from '@angular/core';
import { Panier } from 'src/app/data/panier.model';
import { Produit } from 'src/app/data/produit.model';
import { PanierService } from 'src/app/service/panierService/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit{

  produits: Produit[] = [];

  constructor(private panierService: PanierService) { }

  ngOnInit() {
    this.produits = this.panierService.getProduits();
  }

  decrementerQuantite(produit: Produit) {
    const index = this.produits.findIndex(p => p.id === produit.id);
    if (index >= 0) {
      this.produits[index].quantite = Math.max(1, this.produits[index].quantite - 1);
    }
  }

  incrementerQuantite(produit: Produit){
    const index = this.produits.findIndex(p => p.id === produit.id);
    if (index >= 0) {
      this.produits[index].quantite += 1;
    }
  }

  getTotal(): number{
    const TAUX_TVA = 0.2;
    let total = 0;
    for (let produit of this.produits) {
      const prixTTC = produit.prix * (1 + TAUX_TVA);
      total += prixTTC * produit.quantite;
    }
    return parseFloat(total.toFixed(2));
  }

  supprimerProduit(produit: Produit): void {
    const index = this.produits.indexOf(produit);
    if (index !== -1) {
      this.produits.splice(index, 1);
    }
  }
}
