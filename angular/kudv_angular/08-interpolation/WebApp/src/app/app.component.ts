import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    pageHeader: string = null; //"Employee Details - Interpolation";
    imageSrc: string = "https://s3.amazonaws.com/nd.images/global/logo_header.png";
    firstName: string = "Tom";
    lastName: string = "Hopkins";

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}