import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-use-ng-value',
    templateUrl: './use-ng-value.component.html',
    styleUrls: ['./use-ng-value.component.css']
})
export class UseNgValueComponent implements OnInit {

    selectedGame = null;

    games = [
        {
            title: 'TLOU',
            year: 2013
        },
        {
            title: 'GOW',
            year: 2018
        },
        {
            title: 'HZD',
            year: 2016
        }
    ];

    constructor() { }

    ngOnInit() {
    }

    toString(value: any): string {
        return JSON.stringify(value);
    }

}
