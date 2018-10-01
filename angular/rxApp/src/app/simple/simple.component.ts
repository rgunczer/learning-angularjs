import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  calendarVisible = false;
  currentValue = new Date();
  minDateValue: Date;
  maxDateValue: Date;

  @ViewChild('inp') inputElementRef: ElementRef;
  @Input() idPrefix: string;

  constructor() { }

  ngOnInit() {
  }

  toggleCalendar() {
    this.calendarVisible = !this.calendarVisible;
  }

  valueChange(event) {
    console.log('value change: ' + event.value);
    // this.popover.visible = false;
    this.calendarVisible = false;
  }

  onKeyUp(event: KeyboardEvent) {
    // console.log(event);
    this.inputElementRef.nativeElement.value = 'a';
  }

}
