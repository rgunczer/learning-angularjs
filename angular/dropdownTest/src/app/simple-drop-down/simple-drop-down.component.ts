import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-simple-drop-down',
    templateUrl: './simple-drop-down.component.html',
    styleUrls: ['./simple-drop-down.component.css']
})
export class SimpleDropDownComponent implements OnInit {

    selectedDType = '';

    DTypes = [
        {
            Key: 'key1',
            Value: 'value1'
        },
        {
            Key: 'key2',
            Value: 'value2'
        },
        {
            Key: 'key3',
            Value: 'value3'
        }
    ];

    constructor() {}

    ngOnInit() {
        this.selectedDType = 'key3';
    }

    onSelectionChanged(data: any) {
        console.log('onSelectionChanged: ', data);
    }

}
