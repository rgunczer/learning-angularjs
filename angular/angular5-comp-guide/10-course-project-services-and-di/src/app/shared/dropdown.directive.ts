import { Directive, HostListener, HostBinding } from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor() { }

  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }

  @HostListener('mouseenter') open() {
    this.isOpen = true;
  }

  @HostListener('click')
  @HostListener('mouseleave')
  close() {
    this.isOpen = false;
  }

  // @HostListener('click') click() {
  //   this.isOpen = false;
  // }
}
