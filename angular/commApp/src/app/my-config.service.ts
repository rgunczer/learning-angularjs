import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyConfigService {

  readonly dateFormat = 'dd.MM.yyyy';

  constructor() { }
}
