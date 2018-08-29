import { Directive, HostListener, OnInit } from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';

@Directive({
    selector: '[appTest]'
})
export class TestDirective implements OnInit {
    constructor(public model: NgControl) {
    }

    ngOnInit() {
        this.model.valueAccessor.registerOnChange( () => {
            console.log('on chnage...');
        })
    }

    // @HostListener('ngModelChange') onModelChange(value) {
    //     console.log('onModelChange...' + value);
    //     this.model.
    // }
}
