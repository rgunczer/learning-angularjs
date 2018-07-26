import Rx from 'rxjs/Rx';

Rx.Observable.from([1, 2, 3, 5, 6])
    .subscribe(
        (value) => {
            console.log(`value: ${value}`);
        },
        () => {
            console.log('error');
        },
        () => {
            console.log('complete');
        }
    );