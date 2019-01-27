import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-my-grid-content',
  templateUrl: './my-grid-content.component.html'
})
export class MyGridContentComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(DxDataGridComponent) grid: DxDataGridComponent;

  employees = [
    {
      id: 1,
      name: 'Joel'
    },
    {
      id: 2,
      name: 'Leon'
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log('MyGridContent::ngOnInit...');
  }

  ngAfterViewInit() {
    console.log('MyGridContent::ngAfterViewInit...');

    this.grid.columns = [
      {
        dataField: 'id',
        caption: 'ID'
      },
      {
        dataField: 'name',
        caption: 'NAMES'
      }
    ];
  }

  ngOnDestroy() {
    console.log('MyGridContent::ngOnDestroy...');
  }

}
