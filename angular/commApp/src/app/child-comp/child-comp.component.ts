import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  private _name: string;

  // @Input()
  // name: string;

  // Use an input property setter to intercept and act upon a value from the parent.
  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || 'no name set';
  }

  get name(): string {
    return this._name;
  }

  constructor() { }

  ngOnInit() {
  }

}
