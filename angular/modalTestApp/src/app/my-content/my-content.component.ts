import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-my-content',
  templateUrl: './my-content.component.html'
})
export class MyContentComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('MyContent::ngOnInit...');
  }

  ngAfterViewInit() {
    console.log('MyContent::ngAfterViewInit...');
  }

  ngOnDestroy() {
    console.log('MyContent::ngOnDestroy...');
  }

}
