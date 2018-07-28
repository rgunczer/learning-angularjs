import { Directive, AfterViewInit, ElementRef } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[appMovable]'
})
export class MovableDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    console.log('ngAfterViewInit...');
    this.elementRef.nativeElement.style.backgroundColor = 'pink';
    this.makeItMovable();
  }

  private makeItMovable() {
    const dialog = $('.modal-dialog');

    if (dialog) {
        console.log('dialog draggable');
        dialog.draggable({
            handle: '.modal-header',
            scroll: false
        });
    }

    $('.modal').on('hidden.bs.modal', function () {
        $(this).css({ top: 0, left: 0 });
    });
  }

}




/*

@Directive({
    selector: '[appMovable]'
})
export class MovableDirective implements OnInit, AfterViewInit {

    constructor(private elementRef: ElementRef) { }

    ngOnInit() {
        console.log('ngOnInit...');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit appMovable directive...');

        console.log('jQuery UI version: ' + $.ui.version);

        this.elementRef.nativeElement.style.backgroundColor = 'pink';
        this.makeItMovable();
        // $(this.elementRef.nativeElement).draggable({ handle: '.modal-header', scroll: false});
    }

    private makeItMovable() {
        const dialog = $('.modal-dialog');

        if (dialog) {
            console.log('dialog draggable');
            dialog.draggable({
                handle: '.modal-header',
                scroll: false
            });
        }

        $('.modal').on('hidden.bs.modal', function () {
            $(this).css({ top: 0, left: 0 });
        });
    }

}
*/
