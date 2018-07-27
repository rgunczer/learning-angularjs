import { Component, OnInit } from '@angular/core';
import { AppService, Employee } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employees: Employee[];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.employees = this.appService.getEmployees();
  }

  sayHello() {
    alert('saying hello');
  }
}
