import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appDraggable]'
})
export class DraggableDirective {
    constructor() {}

    @HostBinding('draggable') draggable = 'true';
    @Input() draggableData: any;

    @HostListener('dragstart', ['$event']) dragStart(event) {
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('Text', JSON.stringify(this.draggableData));
    }

    @HostListener('dragend') dragEnd() {
        // console.log('drag end...');
    }
}
