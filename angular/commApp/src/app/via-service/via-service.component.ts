import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-via-service',
  templateUrl: './via-service.component.html',
  styleUrls: ['./via-service.component.css']
})
export class ViaServiceComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

}
