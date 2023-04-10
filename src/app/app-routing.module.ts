import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConditionsComponent } from './components/conditions/conditions.component';
import { PanierComponent } from './components/panier/panier.component';
import { ProductComponent } from './components/product/product.component';
import { ProfilComponent } from './components/profil/profil.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'',
    component:AccueilComponent
  },
  {
    path:'accueil',
    component:AccueilComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'inscription',
    component:SignUpComponent
  },
  {
    path:'connexion',
    component:SignInComponent
  },
  {
    path:'profil',
    component:ProfilComponent
  },
  {
    path:'panier',
    component:PanierComponent
  },
  {
    path:'conditions',
    component:ConditionsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
