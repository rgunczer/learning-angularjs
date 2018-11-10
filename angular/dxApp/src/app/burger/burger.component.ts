import { Component, OnInit, AfterViewInit } from '@angular/core';

import { BurgerService } from '../burger.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit, AfterViewInit {

  modal: any;
  buttons: any;

  constructor(private burgerService: BurgerService) { }

  ngOnInit() {
    this.buttons = this.burgerService.buttons;
  }

  ngAfterViewInit() {
    this.modal = document.getElementById('myBurger');
    this.burgerService.modal = this.modal;

    window.onclick = (event) => {
      if (event.target === this.modal) {
          this.modal.style.display = 'none';
      }
    };
  }

  buttonClick(action: string) {
    console.log('buttonClick: ' + action);
    this.modal.style.display = 'none';
    return false;
  }

}
