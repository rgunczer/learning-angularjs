import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-third-child-comp',
  templateUrl: './third-child-comp.component.html',
  styleUrls: ['./third-child-comp.component.css']
})
export class ThirdChildCompComponent implements OnInit {

  @Output()
  someEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitEvent() {
    this.someEvent.emit(true);
  }
}
