import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appPopup]',
  exportAs: 'popup'
})
export class PopupDirective implements OnInit {

  @Input()
  message: string;

  @HostListener('click') displayMessage(): void {
    alert(this.message);
  }

  constructor(private elementRef: ElementRef) {
    console.log('Directive bound');
    console.log(this.elementRef);
  }

  ngOnInit() {
    console.log('message: ', this.message);
  }

}
