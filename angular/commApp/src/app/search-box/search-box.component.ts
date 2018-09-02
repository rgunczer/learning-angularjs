import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, AfterViewInit {

  // @ViewChild('t') t: ElementRef;

  constructor(private el: ElementRef) {
    console.log('search box: ' + el.nativeElement);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.t.nativeElement.value = 'foo';
    console.log('searchbox - init');
    // fromEvent(thiss.t.nativeElement, 'keyup')
    fromEvent(this.el.nativeElement, 'keyup')
      .pipe(
        map((e: any) => {
          console.log(e.target.value);
          return e.target.value;
        }),
        // filter( (text: string) => {
        //   return text.length > 1;
        // }),
        debounceTime(600),
        tap( (text: string) => console.log('loading: [' + text + ']')),
        map( (q: string) => this.search(q))
        // switchAll()
      )
      .subscribe( (e: any) => {

      });

  }

  search(q) {
    console.log('search: ' + q);
  }

}
