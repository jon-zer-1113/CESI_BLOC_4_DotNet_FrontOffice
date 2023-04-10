import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { ProfilComponent } from './components/profil/profil.component';
import { PanierComponent } from './components/panier/panier.component';
import { ConditionsComponent } from './components/conditions/conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    SignInComponent,
    ProfilComponent,
    PanierComponent,
    ConditionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DxButtonModule,
    DxDataGridModule
  ],
  
  providers: [],
  exports: [
    SignUpComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class SignUpModule { }
