import { Observable, Observer } from "rxjs"; // the Observer interface

let numbers = [1, 5, 10];

let source = Observable.from(numbers);
/*
class MyObserver implements Observer<number> {

    next(value) {
        console.log(`value is: ${value}`);
    }

    error(e) {
        console.log(`error: ${e}`);
    }

    complete() {
        console.log(`complete`);
    }

}

source.subscribe(new MyObserver());
source.subscribe(new MyObserver());
*/
source.subscribe(
    value => console.log(`value is: ${value}`),
    error => console.log(`error: ${error}`),
    () => console.log("complete")
);