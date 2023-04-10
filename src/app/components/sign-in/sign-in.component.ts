import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/app/service/connexionService/connexion.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  togglePasswordVisibility() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const passwordToggle = document.querySelector('.password-toggle') as HTMLElement;
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordToggle.innerHTML = '<i class="fa fa-eye-slash"></i>';
    } else {
      passwordInput.type = 'password';
      passwordToggle.innerHTML = '<i class="fa fa-eye"></i>';
    }
  }

  email = '';
  motDePasse = '';
  errorMessage = '';

  constructor(private connexionService: ConnexionService, private router: Router) { }

  soumettreFormulaire() {
    this.errorMessage = '';
    this.connexionService.connecter(this.email, this.motDePasse)
      .subscribe(
        response => {
          if (response.status === 200) {
            const token = response.body.token;
            localStorage.setItem('token', token);
            this.router.navigate(['/accueil']);
          } else if(response.status === 400) {
            this.errorMessage = 'Email ou mot de passe invalide';
            console.log('Error 400:', this.errorMessage); // Vérifier que la variable errorMessage a été affectée
          }
        },
        error => {
          console.error(error);
        }
      );
  }
}
