import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DxDataGridComponent, DxPieChartComponent } from 'devextreme-angular';
import * as $ from 'jquery';

import 'devextreme/integration/jquery';

import { BurgerService } from './burger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'dxApp';
  files: any[];
  bands: any[];
  conversionOne: any[];
  conversionTwo: any[];

  @ViewChild('grdGames') gridGames: DxDataGridComponent;
  @ViewChild('grdBands') gridBands: DxDataGridComponent;
  // @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
  @ViewChild('one') pieChartOne: DxPieChartComponent;
  @ViewChild('two') pieChartTwo: DxPieChartComponent;

  constructor(private burgerService: BurgerService) { }

  ngOnInit() {
    this.files = [
      {
        path: 'c:\\src\\app\\apple.js',
        fileName: 'apple.js',
        converted: true
      },
      {
        path: 'c:\\src\\app\\oracle.js',
        fileName: 'oracle.js',
        converted: true
      },
      {
        path: 'c:\\src\\app\\pie.js',
        fileName: 'pie.js',
        converted: true
      }
    ];

    this.bands = [
      {
        id: 1,
        band: 'GNR',
        singer: 'Axl'
      },
      {
        id: 2,
        band: 'MM',
        singer: 'Manson'
      },
      {
        id: 3,
        band: 'REM',
        singer: 'Michael'
      }
    ];

    this.conversionOne = [
      { name: 'AngularJS', value: 0.82 },
      { name: 'Angular', value: 0.18 }
    ];

    this.conversionTwo = [
      { name: 'AngularJS', value: 0.37 },
      { name: 'Angular', value: 0.63 }
    ];

    // this.burgerService.addBurgerInfo(this.games);
    this.burgerService.addBurgerInfo(this.bands);
  }

  ngAfterViewInit() {

    this.pieChartOne.title = 'Naughty Dog';

    this.pieChartOne.animation = {
      easing: 'linear',
      duration: 1000
    };

    this.pieChartOne.commonSeriesSettings = {
      argumentFieldName: 'name'
    };

    this.pieChartOne.series = {
      argumentField: 'name',
      argumentType: 'numerice',
      valueField: 'value',
      label: {
        visible: true,
        format: 'percent'
      },
      hoverMode: 'none'
    };

    this.pieChartOne.palette = 'Soft Pastel'; // ['gray', 'blue'];




    this.pieChartTwo.title = 'Rockstar';

    this.pieChartTwo.animation = {
      easing: 'easeOutCubic',
      duration: 3000
    };

    this.pieChartTwo.commonSeriesSettings = {
      argumentFieldName: 'name'
    };

    this.pieChartTwo.series = {
      argumentField: 'name',
      argumentType: 'numerice',
      valueField: 'value',
      label: {
        visible: true,
        format: 'percent'
      },
      hoverMode: 'none'
    };

    this.pieChartTwo.palette = 'Soft Pastel'; // ['gray', 'blue'];



    this.gridGames.selection = { mode: 'none' };
    this.gridGames.filterRow = {
      visible: true
    };
    this.gridGames.columns = [
      // {
      //   caption: 'burger',
      //   minWidth: 40,
      //   // cellTemplate: (container: any, options: any) => {
      //   //   const burgerButton = this.burgerService.createButton(this, options.data.burger.rowId, 'burgClick');
      //   //   burgerButton.appendTo(container);
      //   // }
      //   cellTemplate: this.burgerService.createButtonAlt(this, 'burgClick', 'something useful')
      // },
      {
        dataField: 'path',
        caption: 'ID'
      },
      {
        dataField: 'fileName',
        caption: 'NAME'
      },
      {
        dataField: 'converted',
        caption: 'CONVERTED ?'
      }
    ];

    this.gridBands.selection = { mode: 'none' };
    this.gridBands.columns = [
      {
        caption: 'burger',
        minWidth: 40,
        // cellTemplate: (container: any, options: any) => {
        //   const burgerButton = this.burgerService.createButton(this, options.data.burger.rowId, 'burgClick');
        //   burgerButton.appendTo(container);
        // }
        cellTemplate: this.burgerService.createButtonAlt(this)
      },
      {
        dataField: 'id',
        caption: 'ID'
      },
      {
        dataField: 'band',
        caption: 'NAME'
      },
      {
        dataField: 'singer',
        caption: 'SNGR'
      }
    ];
  }

  burgClick(rowId: number, domId: string, additionalData: any) {
    console.log(`burgClick: rowId:${rowId}, domId:${domId}, additionalData:${additionalData}`);
    const row = [];

    this.burgerService.showMenu({
      domId: domId,
      buttons: [
        {
          action: 'a1',
          text: 'A1',
          click: () => {
            console.log('a1 click...');
          }
        },
        {
          action: 'a2',
          text: 'A2',
          click: () => {
            console.log('a2 click...');
          }
        }
      ]
    });
  }

  burgerClick(rowId: number, domId: string) {
    console.log(`burgerClick: rowId:${rowId}, domId:${domId}`);
    const row = [];

    this.burgerService.showMenu({
      domId: domId,
      buttons: [
        {
          action: 'actionOne',
          text: 'Action One',
          click: () => {
            this.doActionOne(row);
          }
        },
        {
          action: 'actionTwo',
          text: 'Action Two',
          click: () => {
            this.doActionTwo(row);
          }
        },
        {
          action: 'actionThree',
          text: 'Action Three',
          click: () => {
            this.doActionThree(row);
          }
        }
      ]
    });
  }

  doActionOne(row?: any) {
    alert('action one');
  }

  doActionTwo(row?: any) {
    alert('action two');
  }

  doActionThree(row?: any) {
    alert('action two');
  }

  sayHello(name?: string) {
    console.log('say hello... ' + name);
  }
}
