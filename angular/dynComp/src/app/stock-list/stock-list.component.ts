import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { startWith, debounceTime, distinctUntilChanged, switchMap, share, filter } from 'rxjs/operators';

import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  searchString = '';
  public stocks$: Observable<any[]>;
  public stocks: any[] = [
    {
      name: 'll'
    }
  ];
  private searchTerms: Subject<string> = new Subject();

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.stocks$ = this.searchTerms.pipe(
      startWith(this.searchString),
      debounceTime(500),
      distinctUntilChanged(),
      filter(x => x.length > 2),
      switchMap((query) => this.stockService.getStocks(query)),
      share()
    );

    this.stocks$.subscribe(
      (data) => {
        console.log('data', data);
        this.stocks = data.results; // FIXME: add class member
      }
    );
  }

  search() {
    console.log('search... keyup', this.searchString);
    this.searchTerms.next(this.searchString);
  }

}
