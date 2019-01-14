import { Directive, AfterViewInit, ElementRef, Input } from '@angular/core';

import * as $ from 'jquery';

@Directive({
    selector: '[appHoverButton]'
})
export class HoverButtonDirective implements AfterViewInit {

    @Input() FieldName: string;
    @Input() Type: string;


    constructor(private elementRef: ElementRef) { }

    ngAfterViewInit() {
        console.log('HoverButton AfterViewInit...');

        this.elementRef.nativeElement.style.backgroundColor = 'orange';

        const newElement = $('<i class="hover-button fa fa-history"></i>');
        newElement.on('click', () => {
            alert(`FieldName: ${this.FieldName}, Type: ${this.Type}`);
        });
        newElement.insertAfter(this.elementRef.nativeElement);
        $(this.elementRef.nativeElement.parentNode).addClass('hover-button-container');

        const hostEl = $(this.elementRef.nativeElement);
        const off = hostEl.offset();

        const elemH = hostEl.outerHeight();
        const iconH = newElement.height();

        console.log(elemH);
        console.log(iconH);

        // const c = 7;
        const c = (elemH / 2) - (iconH / 2);
        console.log(c);
        newElement.offset({top: off.top + c, left: off.left + 6});
    }

}
