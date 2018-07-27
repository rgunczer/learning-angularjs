// import * as Rx from "rxjs/Observable";

// console.log(Rx);

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/share";

const observable = Observable.create((observer: any) => {
    try {
        observer.next("Hey guys!");
        observer.next("How are you!");
        setInterval(() => {
            observer.next("I'm good");
        }, 2000);
        // observer.complete();
        // observer.next("This will not send");
    } catch (err) {
        observer.error(err);
    }
}).share();

const observer = observable.subscribe(
    (x: any) => {
        addItem(x);
    },
    (error: any) => {
        addItem(error);
    },
    () => {
        addItem("Completed");
    }
);

// const observer2 = observable.subscribe(
//     (x: any) => {
//         addItem(x);
//     }
// );

// observer.add(observer2);

// setTimeout(() => {
//     observer.unsubscribe();
// }, 6001);


setTimeout(() => {
    const observer2 = observable.subscribe(
        (x: any) => {
            addItem("Subscriber 2 " + x);
        }
    );
}, 1000);

function addItem(val: any) {
    const node = document.createElement("li");
    const textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}
