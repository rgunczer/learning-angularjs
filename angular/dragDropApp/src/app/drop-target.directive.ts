import {
    Directive,
    HostListener,
    Input,
    Output,
    EventEmitter,
    HostBinding
} from '@angular/core';

@Directive({
    selector: '[appDropTarget]'
})
export class DropTargetDirective {
    constructor() {}

    @Input() draggableData: any;
    @Output() outDropDraggable = new EventEmitter<any>();
    @HostBinding('class.drag-over') over = false;

    @HostListener('dragenter', ['$event']) dragEnter(event: DragEvent) {
        // console.log('dragenter...');
        this.over = true;
    }

    @HostListener('dragleave', ['$event']) dragLeave(event: DragEvent) {
        // console.log('dragleave...');
        this.over = false;
    }

    @HostListener('dragover', ['$event']) dragOver(event: DragEvent) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }

    @HostListener('drop', ['$event']) drop(event: DragEvent) {
        const data = JSON.parse(event.dataTransfer.getData('Text'));
        if (data.type === this.draggableData.type) {
            this.outDropDraggable.emit({
                drag: data.item,
                drop: this.draggableData.item
            });
        }
        this.over = false;
    }
}
