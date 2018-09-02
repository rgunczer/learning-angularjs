import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { TimerComponent } from './timer/timer.component';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  heroName = 'Batman';
  heroMajor = 1;
  heroMinor = 2;
  dateValue = new Date();

  @ViewChild(TimerComponent)
  timerComp: TimerComponent;

  constructor(
    @Inject('API_URL') private apiUrl: string,
    private sharedService: SharedService
  ) {
    console.log('apiUrl: ', this.apiUrl);
  }

  ngOnInit() {
    this.sharedService.fromChild$
      .subscribe( (msg: string)  => {
        alert('from child: ' + msg);
      });
  }

  eventHandler(value) {
    console.log('event handler...', value);
  }

  showStatus(status) {
    alert(status);
  }

  startTimer() {
    this.timerComp.start();
  }

  sendToChildren() {
    this.sharedService.sendToChildren('msg to children');
  }

}
