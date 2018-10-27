import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dropdownTest';
  selectedDType = '';
  tileData = {
      DTypes: [
          {
              Key: 'key1',
              Value: 'value1'
          },
          {
              Key: 'key2',
              Value: 'value2'
          },
          {
              Key: 'key3',
              Value: 'value3'
          }
      ]
  };

}
