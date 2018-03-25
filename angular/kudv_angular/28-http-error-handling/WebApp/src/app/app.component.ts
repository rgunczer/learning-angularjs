import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    name: string = 'Tom';
    userText: string = 'Pragim';
}

// two way data binding is a combination of:
// -   property binding []
// -   event binding ()

// banana in the box [()]


// structural directives
// ngIf
// ngFor