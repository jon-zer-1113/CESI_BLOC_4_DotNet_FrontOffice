import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InscriptionService } from 'src/app/service/inscriptionService/inscription.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent {
  nom: string;
  prenom: string;
  tel: string;
  email: string;
  motDePasse: string;
  confirmationMotDePasse: string;

  errorMessageMotDePasse: string;
  errorMessageEmail: string;

  constructor(private inscriptionService: InscriptionService, private router: Router) {
    this.errorMessageMotDePasse = '';
    this.errorMessageEmail = '';
  }

  onSubmit() {
    const nom = this.nom;
    const prenom = this.prenom;
    const tel = this.tel;
    const email = this.email;
    const motDePasse = this.motDePasse;
    const confirmationMotDePasse = this.confirmationMotDePasse;
  
    if (nom && prenom && tel && email && motDePasse && confirmationMotDePasse) {
      if (motDePasse !== confirmationMotDePasse) {
        this.errorMessageMotDePasse = 'Les mots de passe ne correspondent pas';
        return;
      }
      this.inscriptionService.addClient(nom, prenom, tel, email, motDePasse, confirmationMotDePasse).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/accueil']);
        },
        error => {
          console.error(error);
          if (error.error === 'Cet e-mail est déjà enregistré.') {           
            this.errorMessageEmail = error.error;
          } else if(error.error === 'Les mots de passe ne correspondent pas.') {
            this.errorMessageMotDePasse = error.error;
          }
        }
      );
    } else {
    }
  }
}





