import { Injectable } from '@angular/core';

import * as _ from 'lodash';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  modal: any;
  buttons: any[] = [];

  constructor() { }

  addBurgerInfo(rows): void {
    const length = rows.length;
    for (let i = 0; i < length; i++) {
        rows[i].burger = { rowId: i };
    }
  }

  getRow(rowId: number, data: any[]): any {
    return data[rowId];
  }

  createButtonAlt(host: any, clickFnName?: string, additionalData?: any) {
    console.log('create button alt');

    clickFnName = clickFnName || 'burgerClick';

    return function(container: any, options: any) {

      const domId = _.uniqueId('burger-btn-');
      const rowId = options.data.burger.rowId;

      $(`<div id="${domId}">`).dxButton({
        icon: 'menu',
        onClick: (e: any) => {
          host[clickFnName](rowId, domId, additionalData);
        }
      }).appendTo(container);

    };
  }

  createButton(host: any, rowId: number, clickFnName?: string): JQuery {
    console.log('createButton...');

    clickFnName = clickFnName || 'burgerClick';

    const domId = _.uniqueId('burger-btn-');

    return $(`<div id="${domId}">`).dxButton({
      icon: 'menu',
      onClick: (e: any) => {
        host[clickFnName](rowId, domId);
      }
    });

  }

  showMenu(data: any) {
    console.log('showBurgerMenu: ', data.domId);
    console.log(data);

    this.buttons.length = 0;
    data.buttons.forEach(item => {
      item.show = true;
      this.buttons.push(item);
    });

    this.modal.style.display = 'block';
    const burgerButton = $('#' + data.domId);
    const offset =  burgerButton.offset();

    console.log(offset);

    const burgerMenu = $('.burger-modal-content');
    burgerMenu.offset({ left: burgerButton.width() + offset.left + 6, top: offset.top });
  }

}
