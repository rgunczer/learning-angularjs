import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appz';

  constructor(private api: ApiService) {}

  getData() {
    this.api.getData()
      .subscribe(data => {
        console.log('in comp' + JSON.stringify(data));
      });
  }

  getDataAndProcess() {
    this.api.getDataAndProcess()
      .subscribe(res => console.log('subs: ' + JSON.stringify(res)));
  }
}
