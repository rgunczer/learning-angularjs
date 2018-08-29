import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appHilite]'
})
export class HiliteDirective implements OnInit {
    constructor(
        private elementRef: ElementRef) {
    }
    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'gray';
    }
}
