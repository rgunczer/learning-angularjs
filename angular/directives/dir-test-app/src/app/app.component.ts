import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  show: boolean;
  message: string;
  selectedDay: number;
  selectedValue: string;
  days = [
    {
        today: 'Monday',
        msg: 'Marvelous Mondays!'
    },
    {
        today: 'Tuesday',
        msg: 'Thrilling Tuesdays!'
    },
    {
        today: 'Wednesday',
        msg: 'Wonderful Wednesdays!'
    },
    {
        today: 'Thursday',
        msg: 'Trendy Thursdays!'
    },
    {
        today: 'Friday',
        msg: 'Fantastic Fridays!'
    },
    {
        today: 'Saturday',
        msg: 'Super Saturdays!'
    },
    {
        today: 'Sunday',
        msg: 'Sunny Sundays!'
    }
  ];

  constructor() {
    this.selectedDay = 0;
  }

}
