import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  postClientUrl = 'https://localhost:7141/api/Client';

  constructor(private http: HttpClient) { }


  addClient(nom: string, prenom: string, tel: string, email: string, motDePasse: string, confirmationMotDePasse: string) {
    const body = {
      nom: nom,
      prenom: prenom,
      tel: tel,
      email: email,
      motDePasse: motDePasse,
      confirmationMotDePasse: confirmationMotDePasse
    };

    return this.http.post(this.postClientUrl, body)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<any> {
    let errorMessageMotDePasse = '';
    let errorMessageEmail = '';
    let errorMessage = '';

    if (error.status === 500) {
      if (error.error === 'Cet e-mail est déjà enregistré.') {
        errorMessageEmail = 'Cet e-mail est déjà enregistré.';
      } else if (error.error === 'Les mots de passe ne correspondent pas.') {
        errorMessageMotDePasse = 'Les mots de passe ne correspondent pas.';
      } else {
        errorMessage = 'Une erreur est survenue.';
      }
    } else if (error.error instanceof ErrorEvent) {
      errorMessage = `Erreur : ${error.error.message}`;
    } else {
      errorMessage = `Une erreur est survenue : ${error.error.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
