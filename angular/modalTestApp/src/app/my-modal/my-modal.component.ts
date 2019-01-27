import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html'
})
export class MyModalComponent implements OnInit, AfterViewInit {

  @ViewChild(ModalDirective) modal: ModalDirective;
  isModalShown = false;

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit...');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit...');
  }

  showModal(): void {
    this.isModalShown = true;
  }

  hideModal(): void {
    this.modal.hide();
  }

  onHidden(): void {
    this.isModalShown = false;
    console.log('onHidden...');
  }

  onShown(): void {
    console.log('onShown...');
  }


}
