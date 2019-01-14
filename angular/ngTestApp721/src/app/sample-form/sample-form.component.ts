import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-sample-form',
    templateUrl: './sample-form.component.html',
    styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {

    testTypeValue = 'TestTypeFromVariable';

    constructor() { }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        console.log(form);
    }

}
