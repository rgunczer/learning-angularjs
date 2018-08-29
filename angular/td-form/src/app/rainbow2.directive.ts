import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appRainbow2]'
})
export class Rainbow2Directive {

    @Input() color0 = 'red';
    @Input() color1 = 'green';
    @Input() color2 = 'blue';

    constructor() {}

    @HostBinding('style.backgroundColor') color: string;

    @HostListener('keydown') newColor() {
        const colorIndex = Math.floor(Math.random() * 3);

        switch (colorIndex) {
            case 0: this.color = this.color0; break;
            case 1: this.color = this.color1; break;
            case 2: this.color = this.color2; break;
        }

        console.log(this.color);
    }
}
