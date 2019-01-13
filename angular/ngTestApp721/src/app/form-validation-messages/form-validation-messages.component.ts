import { Component, OnInit, Input } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { NgControl } from '@angular/forms';

@Component({
    selector: 'app-form-validation-messages',
    templateUrl: './form-validation-messages.component.html',
    styleUrls: ['./form-validation-messages.component.css']
})
export class FormValidationMessagesComponent implements OnInit {

    @Input() elem: NgControl;
    @Input() minLength: number;

    constructor() { }

    ngOnInit() {
    }

}
