import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sort } from 'src/app/data/produit.model';

@Injectable({
  providedIn: 'root'
})

export class SortService {
  
  private apiUrl = 'https://localhost:7141/api/Sort'; // L'URL de l'API pour récupérer les types de vin

  constructor(private http: HttpClient) { }

  getSorts(): Observable<Sort[]> {
    return this.http.get<Sort[]>(this.apiUrl);
  }
}
