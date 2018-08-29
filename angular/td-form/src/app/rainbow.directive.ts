import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appRainbow]'
})
export class RainbowDirective {
    possibleColors = [
        'darksalmon', 'hotpink', 'red', 'green', 'blue'
    ];

    constructor() {}

    @HostBinding('style.backgroundColor') color: string;

    @HostListener('keydown') newColor() {
        const colorIndex = Math.floor(Math.random() * this.possibleColors.length);

        this.color = this.possibleColors[colorIndex];
        console.log(this.color);
    }
}
