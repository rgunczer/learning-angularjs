import { Component } from '@angular/core';
import { UserPreferencesService } from '../employee/userPreferences.service';

@Component({
    template: 
        `<h1>This is the home page</h1>
        <div>
            Color preference: 
            <input type="text" [(ngModel)]="color" [style.background]="color"/>
        </div>`,
   // providers: [UserPreferencesService]
})
export class HomeComponent {
    //private _userPreferencesService: UserPreferencesService;
    constructor(private _userPreferencesService: UserPreferencesService) {
        //this._userPreferencesService = new UserPreferencesService();
    }

    // getter in TS
    get color(): string {
        return this._userPreferencesService.colorPreference;
    }

    // setter TS
    set color(value: string) {
        this._userPreferencesService.colorPreference = value;
    }
}