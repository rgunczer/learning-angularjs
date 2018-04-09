import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  name: string = 'Apple';
  age: number = 20;

  clickHandler() {
    alert('clicked: ' + this.age);
  }

  constructor() { }

  ngOnInit() {
  }

}
