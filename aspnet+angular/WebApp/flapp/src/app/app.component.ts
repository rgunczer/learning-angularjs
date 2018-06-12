import { Component } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    alertCount = 0;

    constructor(private modalService: NgbModal) {

    }

    openAlert(): void {
        ++this.alertCount;
        return alert('some alert ' + this.alertCount);
    }

    showModal(content): void {
        this.modalService.open(content).result.then((result) => {
            alert('closed');
        }, (reson) => {
            alert('something else');
        });
    }
}
