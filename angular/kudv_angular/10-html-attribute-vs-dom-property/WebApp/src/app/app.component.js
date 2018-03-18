"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isDisabled = false;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
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
//# sourceMappingURL=app.component.js.map