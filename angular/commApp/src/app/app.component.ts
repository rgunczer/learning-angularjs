import { Component, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroName = 'Batman';
  heroMajor = 1;
  heroMinor = 2;

  @ViewChild(TimerComponent)
  timerComp: TimerComponent;

  constructor(private sharedService: SharedService) {}

  eventHandler(value) {
    console.log('event handler...', value);
  }

  showStatus(status) {
    alert(status);
  }

  startTimer() {
    this.timerComp.start();
  }
}
