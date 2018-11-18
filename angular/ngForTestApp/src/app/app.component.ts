import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  objectKeys = Object.keys;
  title = 'ngForTestApp';
  items = [
    {
      Key: 'a',
      Value: 'alpha'
    },
    {
      Key: 'b',
      Value: 'beta'
    }
  ];
  objRatings = {
    keyOne: 'valueOne',
    keyTwo: 'valueTwo'
  };
}
