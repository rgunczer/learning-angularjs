import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
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
  games: any[];
  bands: any[];

  @ViewChild('grdGames') gridGames: DxDataGridComponent;
  @ViewChild('grdBands') gridBands: DxDataGridComponent;

  constructor(private burgerService: BurgerService) {}

  ngOnInit() {
    this.games = [
      {
        id: 1,
        name: 'TLOU',
        developer: 'Naughty Dog'
      },
      {
        id: 2,
        name: 'HZD',
        developer: 'Guerilla'
      },
      {
        id: 3,
        name: 'AC',
        developer: 'Ubisoft'
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

    this.burgerService.addBurgerInfo(this.games);
    this.burgerService.addBurgerInfo(this.bands);
  }

  ngAfterViewInit() {
    this.gridGames.selection = { mode: 'none' };
    this.gridGames.columns = [
      {
        caption: 'burger',
        minWidth: 40,
        // cellTemplate: (container: any, options: any) => {
        //   const burgerButton = this.burgerService.createButton(this, options.data.burger.rowId, 'burgClick');
        //   burgerButton.appendTo(container);
        // }
        cellTemplate: this.burgerService.createButtonAlt(this, 'burgClick', 'something useful')
      },
      {
        dataField: 'id',
        caption: 'ID'
      },
      {
        dataField: 'name',
        caption: 'NAME'
      },
      {
        dataField: 'developer',
        caption: 'DEV'
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
