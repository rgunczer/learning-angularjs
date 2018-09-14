import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  bgColor = 'red';
  title = 'jonas';

  constructor(
    private commonService: CommonService) {
  }

  ngOnInit() {
    console.log(this.commonService.name);
  }

  onClick() {
    this.bgColor = 'yellow';
    // this.commonService.name = 'jamie';
  }
}
