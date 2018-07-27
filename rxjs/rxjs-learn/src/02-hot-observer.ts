import { Observable } from "rxjs/Observable";
import { fromEvent } from "rxjs/Observable/fromEvent";

const observable = fromEvent(document, 'mousemove');

setTimeout(() => {
    const subscription = observable.subscribe(
        (x:any) => {
            addItem(x);
        }
    );
}, 2000);

function addItem(val: any) {
    const node: HTMLElement = document.createElement("li");
    const textnode: any = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}