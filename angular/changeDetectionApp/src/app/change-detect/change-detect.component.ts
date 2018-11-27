import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-change-detect',
  templateUrl: './change-detect.component.html',
  styleUrls: ['./change-detect.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectComponent implements OnInit {

  title = 'Change Detection';

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
