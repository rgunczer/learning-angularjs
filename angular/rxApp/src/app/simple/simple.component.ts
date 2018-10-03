import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePipe } from '@angular/common';

import * as $ from 'jquery';
import { SELECT_VALUE_ACCESSOR } from '@angular/forms/src/directives/select_control_value_accessor';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SimpleComponent,
    multi: true
  }]
})
export class SimpleComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  calendarVisible = false;
  currentValue = new Date();
  minDateValue: Date;
  maxDateValue: Date;
  datePipe = new DatePipe('en');

  @ViewChild('inp') inputElementRef: ElementRef;
  @Input() idPrefix: string;

  private onChange: (value: string) => void;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const $el = $(this.inputElementRef.nativeElement);
    $el.on('keydown', (event) => {
      console.log('keydown...', event);
      if (event.key === 'd') {
        console.log('d is pressed...');
        this.onChange('JANCSI');
      }
    });
  }

  writeValue(value: any): void { // writeValue — model -> view
    console.log('writeValue[model->view]');

    if (value instanceof Date) {
      this.inputElementRef.nativeElement.value = this.datePipe.transform(value, 'dd.MM.yyyy');
    } else {
      this.inputElementRef.nativeElement.value = 'NOT datum';
    }

  }

  registerOnChange(fn: any): void { // registerOnChange — view -> model
    this.onChange = fn;
    console.log('registerOnChange[view->model]');
  }

  registerOnTouched(fn: any): void {

  }


  // toggleCalendar() {
  //   this.calendarVisible = !this.calendarVisible;
  // }

  // valueChange(event) {
  //   console.log('value change: ' + event.value);
  //   // this.popover.visible = false;
  //   this.calendarVisible = false;
  // }

  // onKeyUp(event: KeyboardEvent) {
  //   console.log(event);
  //   event.preventDefault();
  //   this.inputElementRef.nativeElement.value += 'a';
  // }

  // currentValueChange(event) {
  //   console.log('currentValueChange...', event);
  //   this.currentValue = event.toUpperCase();
  // }

}
