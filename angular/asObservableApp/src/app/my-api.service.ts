import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  constructor() { }

  getData() {
    const subject = new Subject();

    setTimeout(() => {
      subject.next('weird data');
    }, 6000);

    return subject.asObservable();
  }
}
