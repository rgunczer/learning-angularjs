import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forkApp';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('ngOnInit...');

    const obs = [];
    for (let i = 1; i < 4; i++) {

      const ob = this.http.get('https://swapi.co/api/people/' + i);
      obs.push(ob);

    }

    forkJoin(obs)
      .subscribe(
        datas => {
          console.log('received data', datas);
        }
      );

  }
}
