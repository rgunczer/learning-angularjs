import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

    lorem = '';

    constructor() { }

    ngOnInit() {
        for (let i = 0; i < 20; ++i) {
            // tslint:disable-next-line
            this.lorem += 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laborum quas non, architecto esse nemo officiis nam quia ut voluptate, suscipit dignissimos commodi ullam dolores eos sunt, voluptatem laboriosam excepturi.';
            this.lorem += '                                         ';
        }
    }

}
