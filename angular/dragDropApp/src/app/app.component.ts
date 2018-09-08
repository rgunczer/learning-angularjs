import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dragDropApp';
  age = 12;

  persons = [
    {
      id: 1,
      name: 'joel'
    },
    {
      id: 2,
      name: 'ellie'
    },
    {
      id: 3,
      name: 'tess'
    }
  ];

}
