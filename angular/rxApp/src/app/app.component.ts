import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxApp';

  constructor(
    private http: HttpClient,
    private titleService: Title
  ) {

  }

  ngOnInit() {
    console.log('ngOnInit...');

    const title = this.titleService.getTitle();
    console.log('title:', title);


    const obs = of(1, 2, 3);

    forkJoin(obs).subscribe((x) => console.log(x));

    // const joint = obs.pipe(
    //   map(x => {
    //     // console.log(x);
    //     return x;
    //   })
    // );

    // joint.subscribe(
    //   (values) => {
    //     console.log('values: ', values);
    //   }
    // );
  }

  setTitle() {
    this.titleService.setTitle('jancsi');
  }

}
