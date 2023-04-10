import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  private connectUrl = 'https://localhost:7141/api/Connexion/login';

  constructor(private http: HttpClient) { }

  connecter(email: string, motDePasse: string): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.connectUrl, { email, motDePasse }, { observe: 'response' });
  }
}