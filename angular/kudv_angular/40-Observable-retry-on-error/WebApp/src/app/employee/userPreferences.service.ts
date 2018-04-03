import { Injectable } from '@angular/core';

@Injectable()
export class UserPreferencesService {
    constructor() {
        console.log('UserPreferencesService ctor');
    }
    colorPreference: string = 'orange';
}