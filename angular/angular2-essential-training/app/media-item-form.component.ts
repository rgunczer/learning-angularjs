import { Component, Inject } from '@angular/core';
import { /*FormGroup, FormControl,*/ Validators, FormBuilder } from '@angular/forms';

import { MediaItemService } from './media-item.service';
import { lookupListToken } from './providers';

@Component({
    selector: 'mw-media-item-form',
    templateUrl: 'app/media-item-form.component.html',
    styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
    form;

    constructor(
        private formBuilder: FormBuilder,
        private mediaItemService: MediaItemService,
        // @Inject('lookupListToken') public lookupLists
        @Inject(lookupListToken) public lookupLists
    ) {

    }

    ngOnInit() {
        //this.form = new FormGroup({
        this.form = this.formBuilder.group({
            medium: this.formBuilder.control('Movies'), //new FormControl('Movies'),
            name: /*new FormControl*/ this.formBuilder.control('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
            ])),
            category: /*new FormControl*/this.formBuilder.control(''),
            year: /*new FormControl*/this.formBuilder.control('', this.yearValidator)
        });
    }

    yearValidator(control) {
        if (control.value.trim().length === 0) {
            return null;
        }
        let year = parseInt(control.value);
        let minYear = 1900;
        let maxYear = 2100;
        if (year >= minYear && year <= maxYear) {
            return null;
        } else {
            return {
                //'year': true
                'year': {
                    'min': minYear,
                    'max': maxYear
                }
            };
        }
    }

    onSubmit(mediaItem) {
        console.log(mediaItem);
        this.mediaItemService.add(mediaItem);
    }
}