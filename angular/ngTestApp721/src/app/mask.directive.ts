import { Directive, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';


@Directive({
    selector: '[appMask]'
})
export class MaskDirective {

    val: any = '';

    constructor(
        public model: NgModel
    ) {
    }

    @HostListener('blur', ['$event'])
    onBlur(e: Event) {
        console.log('blur');
        console.log(this.model);
        this.val = this.model.value;

        if (!isNaN(this.val)) {
            const num = new Number(this.val);
            // this.model.control.patchValue(this.val.toUpperCase());
            this.model.control.patchValue(num.toFixed(2));
        }
    }

    @HostListener('focus', ['$event'])
    onFocus(e: Event) {
        this.model.control.patchValue(this.val);
    }

}
