const Observable = require('rxjs/Observable').Observable;
require('rxjs/add/observable/of');

Observable.of(1, 2, 3).subscribe(value => {
    console.log(value);
})