import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import * as $ from 'jquery';
import * as _ from 'lodash';
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
  buttons: any[];

  @ViewChild(DxDataGridComponent) gridGames: DxDataGridComponent;

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

    this.buttons = [
      {
        text: 'menu 0',
        show: true,
        action: 'eat'
      },
      {
        text: 'menu 1',
        show: true,
        action: 'sleep'
      },
      {
        text: 'menu 2',
        show: true,
        action: 'play'
      }
    ];
  }

  ngAfterViewInit() {
    this.gridGames.selection = { mode: 'none' };
    this.gridGames.columns = [
      {
        caption: 'burger',
        minWidth: 40,
        cellTemplate: (container: any, options: any) => {
          const id = _.uniqueId('burger-btn-');
          $(`<div id="${id}">`).dxButton({
            icon: 'menu',
            onClick: (e: any) => {
              this.burgerClick(id);
              // this.burgerService.showBurgerMenu(id, options.data.name);
            }
          }).appendTo(container);
        }
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
  }

  burgerClick(domId: string) {
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

  sayHello(name?: string) {
    console.log('say hello... ' + name);
  }
}
