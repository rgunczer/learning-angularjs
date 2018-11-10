import { Injectable } from '@angular/core';

import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  modal: any;
  buttons: any[] = [];

  constructor() { }

  showMenu(data: any) { // domId: string, text?: string) {
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
