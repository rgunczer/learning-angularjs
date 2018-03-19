import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    name: string = 'Tom';
}

// two way data binding is a combinatio of:
// -   property binding []
// -   event binding ()

// banana in the box [()]