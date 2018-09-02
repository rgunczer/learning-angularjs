import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StartupDataProvider {

  constructor(
    private http: HttpClient
  ) {
  }

  load() {
    return new Promise( (resolve, reject) => {

      this.http.get('https://api.icndb.com/jokes/random')
        .subscribe(
          (response: Response) => {
            console.log('response', response);
            resolve(true);
          }
        );

      // setTimeout( () => {
      //   resolve(true);
      // }, 3000 )
    } )
  }
}
