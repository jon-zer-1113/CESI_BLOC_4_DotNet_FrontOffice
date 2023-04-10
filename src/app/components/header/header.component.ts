import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PanierService } from 'src/app/service/panierService/panier.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  estConnecte = false;

  constructor(private router: Router, private panierService : PanierService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.estConnecte = true;
    }
  }

  deconnecter() {
    localStorage.removeItem('token');
    this.estConnecte = false;
    this.router.navigate(['/connexion']);
  }
}
