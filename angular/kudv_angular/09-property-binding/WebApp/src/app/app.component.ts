import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    pageHeader: string = "Employee Details - Interpolation";
    imageSrc: string = "https://s3.amazonaws.com/nd.images/global/logo_header.png";
    imagePath: string = "nd.images/global/logo_header.png";
    firstName: string = "Tom";
    lastName: string = "Hopkins";
    isDisabled: boolean = false;
    badHtml: string = "Hello<script>alert('Hacked');</script> World";

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}

// interpolation <img src='{{imagePath}}'>
// property binding <img [src]="imagePath"> must be used when binding non string value eg. <button [disabled]="isDisabled">