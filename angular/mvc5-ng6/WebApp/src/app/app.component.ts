import { Component } from "@angular/core";

import { UtilService } from "./util.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    title = "my angular app with asp.net mvc 6 - 7";
    name: string = "Joel";

    constructor(private _utilService: UtilService) {}

    onClick() {
        this.title = `my random title: ${Math.random()} ${this.name}`;
    }

    onInvokeUtilService() {
        this._utilService.showAlert();
    }

    showCSRFtoken() {
        this._utilService.showCSRFtoken();

    }
}
