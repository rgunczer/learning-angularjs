import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appUppercase]'
})
export class UppercaseDirective {
    constructor(private ref: ElementRef) {}

    @HostListener('input', ['$event']) onInput(event) {
        this.ref.nativeElement.value = event.target.value.toUpperCase();
    }
}
