import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `<div>Hello {{ name }}</div>`
})
export class AppComponent {
    name: string = "Angu";
}