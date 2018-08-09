import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(
    private http: Http
  ) { }

  storeServers(servers: any[]) {
    const headers = new Headers({
      'Content-Type': 'application-json'
    });
    // return this.http.post(
    //   'https://test-proj-315b4.firebaseio.com/data.json',
    //   servers,
    //   { headers: headers }
    // );
    return this.http.put(
      'https://test-proj-315b4.firebaseio.com/data.json',
      servers,
      { headers: headers }
    );
  }

  getServers() {
    return this.http.get(
      'https://test-proj-315b4.firebaseio.com/data'
    )
      .pipe(
        map(
          (response: Response) => {
            const data = response.json();
            for (const server of data) {
              server.name = 'FETCHED_' + server.name;
            }
            return data;
          }
        ),
      catchError(
        (error: Response) => {
          console.log(error);
          console.log('jancsi');
          return Observable.throw(error);
        }
      )
    )
  }

  getAppName() {
    return this.http.get('https://test-proj-315b4.firebaseio.com/appName.json')
    .pipe(
      map(
        (response: Response) => {
          return response.json();
        }
      )
    )
  }
}
