"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var util_service_1 = require("./util.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(_utilService) {
        this._utilService = _utilService;
        this.title = "my angular app with asp.net mvc 6 - 7";
        this.name = "Joel";
    }
    AppComponent.prototype.onClick = function () {
        this.title = "my random title: " + Math.random() + " " + this.name;
    };
    AppComponent.prototype.onInvokeUtilService = function () {
        this._utilService.showAlert();
    };
    AppComponent.prototype.showCSRFtoken = function () {
        this._utilService.showCSRFtoken();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "app-root",
            templateUrl: "./app.component.html",
            styleUrls: ["./app.component.css"]
        }),
        __metadata("design:paramtypes", [util_service_1.UtilService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map