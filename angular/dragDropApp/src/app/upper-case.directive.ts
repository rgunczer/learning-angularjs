import { Directive, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector: "[appUpperCase]"
})
export class UpperCaseDirective {

    // @HostListener('keydown', ['$event']) keydown(event: KeyboardEvent) {
    //     console.log('keydown...');
    //     this.el.nativeElement.value = event.target.value.toUpperCase();
    // }

    // @HostListener('input', ['$event']) onInput(event) {
    //     this.ref.nativeElement.value = event.target.value.toUpperCase();
    // }

    @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
        if (event.keyCode > 32 && event.keyCode < 128) {
          event.target['value']+=event.key.toUpperCase();
          event.preventDefault(); //stop propagation
          //must create a "input" event, if not, there are no change in your value
          var evt = document.createEvent("HTMLEvents");
          evt.initEvent("input", false, true);
          event.target.dispatchEvent(evt);
        }
      }

    constructor(private ref: ElementRef) {}
}
