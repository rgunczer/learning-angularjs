import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HelloService {

    constructor() { }

    showSomeText() {
        console.log('some text');
    }
}
