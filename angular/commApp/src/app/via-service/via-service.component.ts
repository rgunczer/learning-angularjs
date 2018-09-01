import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-via-service',
  templateUrl: './via-service.component.html',
  styleUrls: ['./via-service.component.css']
})
export class ViaServiceComponent implements OnInit, OnDestroy {
  msg: string;
  private subscription: Subscription;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {

    this.subscription = this.sharedService.fromParent$
      .subscribe( (msg: string) => {
        this.msg = msg;
      } );
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  sendToParent() {
    this.sharedService.sendToParent('some msg to parent');
  }

}
