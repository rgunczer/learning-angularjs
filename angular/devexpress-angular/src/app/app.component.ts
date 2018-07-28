import { Component, OnInit, TemplateRef } from '@angular/core';
import { AppService, Employee } from './app.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employees: Employee[];
  modalRef: BsModalRef;

  constructor(
    private appService: AppService,
    private bsModalService: BsModalService
  ) {}

  ngOnInit() {
    this.employees = this.appService.getEmployees();
  }

  sayHello() {
    alert('saying hello');
  }

  onShow(template: TemplateRef<any>) {
    console.log('on show');
    this.modalRef = this.bsModalService.show(template, { class: 'modal-lg' });
  }
}
