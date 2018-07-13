import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'http://localhost:3000/content';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url);
      // .subscribe(data => {
      //   console.log('in api: ' +  JSON.stringify(data)));
      // };
  }
  private handleError (error) {
    return throwError('Something bad happened; please try again later.');
  }

  getDataAndProcess() {
    console.log('get and process...');
    return this.http.get(this.url)
      .pipe(
        map((data: any[]) => {
          console.log('map before: ' + data);
          data.push({ text: 'passion'});
          console.log('map after: ' + data);
          return data;
        }),
        catchError(this.handleError)
      );
  }
}
