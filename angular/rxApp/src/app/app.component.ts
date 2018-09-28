import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, forkJoin } from 'rxjs';
import { DxPopoverComponent } from 'devextreme-angular';

declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxApp';

  minDateValue: Date;
  maxDateValue: Date;
  currentValue = new Date();

  isPopupVisible = false;

  defaultVisible = false;

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

  toggleDefault() {
    this.defaultVisible = !this.defaultVisible;
  }

  setTitle() {
    this.titleService.setTitle('jancsi');
  }

  helloWorld() {
    alert('hello world');
  }

  valueChange(event) {
    console.log('value change: ' + event.value);
    this.popover.visible = false;
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

}
