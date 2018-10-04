import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePipe } from '@angular/common';

import * as $ from 'jquery';

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

  sectionIndex = 0;
  dateParts: {dd: number, mm: number, yyyy: number} = {
    dd: -1,
    mm: -1,
    yyyy: -1
  };
  debugData = {
    pos: -1,
  };
  calendarVisible = false;
  currentValue = new Date();
  minDateValue: Date;
  maxDateValue: Date;
  datePipe = new DatePipe('en');
  $el: JQuery;

  @ViewChild('inp') inputElementRef: ElementRef;
  @Input() idPrefix: string;

  private onChange: (value: string | Date) => void;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.$el = $(this.inputElementRef.nativeElement);

    this.$el.focus( (event) => {
      this.sectionIndex = 0;
      this.hiliteSection();
    });

    this.$el.on('keydown', (event) => {
      console.log('keydown...', event);

      // if (event.key === 'd') {
      //   event.preventDefault();
      //   event.stopPropagation();
      //   console.log('d is pressed...');
      //   this.onChange('JANCSI');
      //   this.$el.val('JANCSI');
      // }

      if (event.key === 'ArrowUp') {
        event.preventDefault();
        event.stopPropagation();

        console.log('arrow up');

        this.stepSection('up');
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        event.stopPropagation();

        console.log('arrow down');

        this.stepSection('down');
      }

      const inputElement: HTMLInputElement = <HTMLInputElement>this.$el.get(0);
      this.debugData.pos = inputElement.selectionStart;

      if (event.key === 'ArrowLeft') {
        this.sectionIndex--;
        if (this.sectionIndex < 0) {
          this.sectionIndex = 0;
        }
        event.preventDefault();
        event.stopPropagation();
      }

      if (event.key === 'ArrowRight') {
        this.sectionIndex++;
        if (this.sectionIndex > 2) {
          this.sectionIndex = 2;
        }
        event.preventDefault();
        event.stopPropagation();
      }

      this.$el.val(this.getViewValue());
      this.hiliteSection();


      console.log('selection start: ', inputElement.selectionStart);

    });
  }

  stepSection(direction: 'up' | 'down') {
    let step = 0;
    if (direction === 'up') {
      step = 1;
    } else if (direction === 'down') {
      step = -1;
    }

    switch (this.sectionIndex) {
      case 0: // 'DD'
        if (this.dateParts.dd === -1) {
          this.dateParts.dd = 1;
        } else if (Number.isInteger(this.dateParts.dd)) {
          this.dateParts.dd += step;

          if (this.dateParts.dd > 31) {
            this.dateParts.dd = 1;
          }
          if (this.dateParts.dd === 0) {
            this.dateParts.dd = 31;
          }
        }
        break;

      case 1: // 'MM'
        if (this.dateParts.mm === -1) {
          this.dateParts.mm = 1;
        } else if (Number.isInteger(this.dateParts.mm)) {
          this.dateParts.mm += step;

          if (this.dateParts.mm > 12) {
            this.dateParts.mm = 1;
          }
          if (this.dateParts.mm === 0) {
            this.dateParts.mm = 12;
          }

        }
        break;

      case 2: // 'YYYY':
        if (this.dateParts.yyyy === -1) {
          this.dateParts.yyyy = (new Date()).getFullYear();
        } else if (Number.isInteger(this.dateParts.yyyy)) {
          this.dateParts.yyyy += step;
        }
        break;
    }

    if (
      Number.isInteger(this.dateParts.dd) &&
      Number.isInteger(this.dateParts.mm) &&
      Number.isInteger(this.dateParts.yyyy)
    ) {
      // debugger;
      const day = Number(this.dateParts.dd);
      const month = Number(this.dateParts.mm) - 1;
      const year = Number(this.dateParts.yyyy);
      const date = new Date(year, month, day);
      this.debugData.date = date;
      this.onChange(date);
    }

    this.$el.val(this.getViewValue());
  }

  hiliteSection() {
    const inputElement: HTMLInputElement = <HTMLInputElement>this.$el.get(0);
    switch (this.sectionIndex) {
      case 0:
        inputElement.setSelectionRange(0, 2);
        break;

      case 1:
        inputElement.setSelectionRange(3, 5);
        break;

      case 2:
        inputElement.setSelectionRange(6, 10);
        break;
    }
  }

  private pad(number: number): string {
    let num;
    if (number <= 9) {
      return '0' + number;
    }

    if (number <= 99) {
      return number + '';
    }

    if (number <= 9999) {
      num = ('000' + number).slice(-4);
      return num + '';
    }
  }

  getViewValue() {
    const day = this.dateParts.dd === -1 ? 'DD' : this.pad(this.dateParts.dd);
    const month = this.dateParts.mm === -1 ? 'MM' : this.pad(this.dateParts.mm);
    const year = this.dateParts.yyyy === -1 ? 'YYYY' : this.pad(this.dateParts.yyyy);
    return `${day}.${month}.${year}`;
  }

  writeValue(value: any): void { // writeValue — model -> view
    console.log('writeValue[model->view]');

    if (value instanceof Date) {
      this.inputElementRef.nativeElement.value = this.datePipe.transform(value, 'dd.MM.yyyy');
    } else {
      this.inputElementRef.nativeElement.value = this.getViewValue();
    }

  }

  registerOnChange(fn: any): void { // registerOnChange — view -> model
    this.onChange = fn;
    console.log('registerOnChange[view->model]');
  }

  registerOnTouched(fn: any): void {

  }

  toggleCalendar() {
    this.calendarVisible = !this.calendarVisible;
  }

  valueChange(event) {
    console.log('value change: ' + event.value);
    // this.popover.visible = false;
    this.calendarVisible = false;
    const date = new Date(event.value);

    const dateStr = this.datePipe.transform(date, 'dd.MM.yyyy');

    this.$el.val(dateStr);
    this.onChange(dateStr);
  }

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
