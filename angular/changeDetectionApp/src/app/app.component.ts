import { Component } from '@angular/core';

import { User } from './shared/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'changeDetectionApp';
  user: User;

  constructor() {
    this.user = new User('Default User', 0);
  }

  changeDetectionDefault(): void {
    this.user.userName = 'Packt Pub';
    this.user.userId = 10;
  }

  changeDetectionOnPush(): void {
    this.user = new User('Mike', 10);
  }
}
