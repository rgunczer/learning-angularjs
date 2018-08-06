
import { Observable, Subject, ReplaySubject, from, of, range, fromEvent } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

range(1, 200)
    // .pipe(filter(x => x % 2 === 1), map(x => x + x))
    .subscribe(x => console.log(x));

    // const app = (a,b) => {
    //     return a + b;
    // }

    // alert(app(1,2));

console.log('here');
// var mouseMoves = fromEvent(document.body, 'mousemove');
fromEvent(document, 'mousemove')
    .subscribe(event => {
        console.log(event);
    })