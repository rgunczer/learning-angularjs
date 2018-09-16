import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(
    private http: HttpClient
  ) { }

  getStocks(query: string): Observable<any> {
    return this.http.get('https://swapi.co/api/people/' + query)
  }
}
