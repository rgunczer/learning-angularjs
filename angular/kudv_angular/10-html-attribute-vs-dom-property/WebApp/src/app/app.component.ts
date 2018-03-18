import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    isDisabled: boolean = false;
}

// interpolation <img src='{{imagePath}}'>
// property binding <img [src]="imagePath"> must be used when binding non string value eg. <button [disabled]="isDisabled">


// attributes are defined by HTML
// properties are defined by DOM

// attributes initialize DOM properties.
// property values can change, attribute values can't

// inputId.getAttribute('value')
// "Tom"
// inputId.value
// "Tom"
// inputId.getAttribute('value')
// "Tom"
// inputId.value
// "Mary"

// Angular binding works with properties and events, and not attributes