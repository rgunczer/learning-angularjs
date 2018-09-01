import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent implements OnInit {

  @Input()
  text: string;

  constructor() { }

  ngOnInit() {
  }

  click() {
    alert('click: ' + this.text);
  }
}
