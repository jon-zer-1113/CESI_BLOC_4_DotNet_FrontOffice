import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Produit, Sort } from 'src/app/data/produit.model';
import { PanierService } from 'src/app/service/panierService/panier.service';
import { ProduitService } from 'src/app/service/produitService/produit.service';
import { SortService } from 'src/app/service/SortService/sort.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @ViewChild('selectElement', { static: true })
  selectElement!: ElementRef<HTMLSelectElement>;

  public produits: Produit[];
  public sortList: Sort[];

  constructor(private produitService: ProduitService, private sortService: SortService, private panierService: PanierService) { }

  ngOnInit() {
    this.produitService.getProduits().subscribe(
      (data) => {
        this.produits = data;
      },
      (error) => {
        console.log(error);
      }
    );
    
    this.sortService.getSorts().subscribe(
      (data) => {
        this.sortList = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ajouterAuPanier(produit: Produit) {
    this.panierService.ajouterAuPanier(produit);
  }

  filtrerParSortid(): void {
  const sortId = this.selectElement.nativeElement.value;
  this.produitService.getProduitsParSortid(parseInt(sortId, 10)).subscribe(
    (data) => {
      this.produits = data;
    },
    (error) => {
      console.log(error);
    }
  );
}
}
