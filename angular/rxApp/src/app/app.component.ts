import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, forkJoin } from 'rxjs';
import { DxPopoverComponent } from 'devextreme-angular';
import { EventListener } from '@angular/core/src/debug/debug_node';
import { isDate } from 'util';

declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxApp';

  dateOne: Date | string = '';
  dateTwo = new Date();

  minDateValue: Date;
  maxDateValue: Date;
  currentValue = new Date();

  isPopupVisible = false;

  calendarVisible = false;

  @ViewChild(DxPopoverComponent) popover: DxPopoverComponent;

  constructor(
    private http: HttpClient,
    private titleService: Title
  ) {

  }

  ngOnInit() {
    console.log('ngOnInit...');

    const title = this.titleService.getTitle();
    console.log('title:', title);


    const obs = of(1, 2, 3);

    forkJoin(obs).subscribe((x) => console.log(x));

    // const joint = obs.pipe(
    //   map(x => {
    //     // console.log(x);
    //     return x;
    //   })
    // );

    // joint.subscribe(
    //   (values) => {
    //     console.log('values: ', values);
    //   }
    // );
  }

  setTitle() {
    this.titleService.setTitle('jancsi');
  }

  helloWorld() {
    alert('hello world');
  }

  showPopup() {
    this.isPopupVisible = !this.isPopupVisible;
  }

  showCalendarModal() {
    const button = $('#calendar-button');

    const popup = $('#myModal');

    popup.modal('show');

    const pos = button.position();

    console.log(pos);

    const data = {
      left: pos.left,
      top: pos.top - 330
    };

    console.log(data);

    popup.position(data);

    // console.log(pos);
  }

  currentValueChange(event: string) {
    const parts = event.split('.');
    if (parts.length === 3) {
      const day = Number(parts[0]);
      const month = Number(parts[1]) - 1;
      const year = Number(parts[2]);

      const date = new Date(year, month, day);
      // if (isDate(date)) {
        this.currentValue = date;
      // }
    } else {
      this.currentValue = null;
    }
    console.log(event);
  }

}
