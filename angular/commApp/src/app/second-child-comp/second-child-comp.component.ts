import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-second-child-comp',
  templateUrl: './second-child-comp.component.html',
  styleUrls: ['./second-child-comp.component.css']
})
export class SecondChildCompComponent implements OnInit, OnChanges {

  @Input()
  major: number;

  @Input()
  minor: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log('changes: ', changes);
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        console.log('initial value of ' + propName + ' is set to: ' + to);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        console.log(propName + ' changed from ' + from + ' to ' + to);
      }
    }
  }

}
