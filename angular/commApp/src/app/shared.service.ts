import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// Parent and children communicate via a service

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // observable string source
  private fromParentSource = new Subject<string>();
  private fromChildSource = new Subject<string>();

  // observable string stream
  fromParent$ = this.fromParentSource.asObservable();
  fromChild$ = this.fromChildSource.asObservable();

  sendToChildren(msg: string) {
    this.fromParentSource.next(msg);
  }

  sendToParent(msg: string) {
    this.fromChildSource.next(msg);
  }

}
