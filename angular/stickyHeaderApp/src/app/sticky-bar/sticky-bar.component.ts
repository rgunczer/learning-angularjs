import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-sticky-bar',
    templateUrl: './sticky-bar.component.html',
    styleUrls: ['./sticky-bar.component.css']
})
export class StickyBarComponent implements OnInit, AfterViewInit, OnDestroy {

    isSticked = false;
    offsetToSticky = 0;
    navbar: HTMLElement;
    scrollHandler: any;

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.navbar = document.querySelector('#navbar');
        this.offsetToSticky = this.navbar.offsetTop;

        console.log(this.offsetToSticky);

        this.scrollHandler = this.onScroll.bind(this);

        window.addEventListener('scroll', this.scrollHandler, false);
    }

    onScroll() {
        console.log('scroll', this.offsetToSticky);
        if (window.pageYOffset >= this.offsetToSticky) {
            this.navbar.classList.add('sticky');
            this.isSticked = true;
        } else {
            this.navbar.classList.remove('sticky');
            this.isSticked = false;
        }
    }

    onRemoveEventListener() {
        console.log('remove event listener');
        window.removeEventListener('scroll', this.scrollHandler, false);
    }

    ngOnDestroy() {
        window.removeEventListener('scroll', this.scrollHandler);
    }

}
