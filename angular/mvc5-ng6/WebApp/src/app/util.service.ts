import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    constructor() { }

    showAlert() {
        alert('alert from util');
    }

    showCSRFtoken() {
        var token = $("[name='__RequestVerificationToken']").val();
        alert(token);
    }
}
