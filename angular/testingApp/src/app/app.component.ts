import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';
import { of, from, Observable } from 'rxjs';
import { delay, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  bgColor = 'red';
  title = 'jonas';
  numbers$: Observable<number>;

  constructor(
    private commonService: CommonService) {
  }

  ngOnInit() {
    console.log(this.commonService.name);
    this.numbers$ = from([1, 2, 3, 4, 5, 6, 7]).pipe(concatMap(num => of(num).pipe(delay(1000))));
    // from([1, 2, 3, 4, 5, 6, 7]).pipe(concatMap(num => of(num).pipe(delay(1000))))
    //   .subscribe(x => console.log(x));
  }

  onClick() {
    this.bgColor = 'yellow';
    // this.commonService.name = 'jamie';
  }

  testOf() {
    this.numbers$.subscribe((x) => { console.log(x); });
  }
}
