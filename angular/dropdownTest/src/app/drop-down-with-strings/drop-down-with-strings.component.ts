import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-drop-down-with-strings',
    templateUrl: './drop-down-with-strings.component.html',
    styleUrls: ['./drop-down-with-strings.component.css']
})
export class DropDownWithStringsComponent implements OnInit {

    selectedFruit = '';

    fruits = [
        'apple',
        'orange',
        'melon'
    ];

    constructor() { }

    ngOnInit() {
        this.selectedFruit = 'melon';
    }

    onSelectionChanged(fruit: string): void {
        console.log(`onSelectionChanged: ${fruit}`);
    }

}
