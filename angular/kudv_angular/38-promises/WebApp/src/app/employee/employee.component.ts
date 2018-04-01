import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    //styles: ['table {color: #369;font-family: Arial, Helvetica, sans-serif;font-size: large;border-collapse: collapse;font-style: inherit;}td {border: 3px solid yellow;}']
    styleUrls: ['app/employee/employee.component.css']
})
export class EmployeeComponent implements OnInit {
    employee: IEmployee;
    statusMessage: string;

    constructor(
        private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router
    ) {
    }

    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeeByCode(empCode)
            .then(
            (employeeData) => {
                if (employeeData == null) {
                    this.statusMessage = "Employee does not exists";

                } else {
                    this.employee = employeeData
                }
            })
            .catch((error) => {
            this.statusMessage = 'Problem with the service. Try again later';
            console.log(error);
        });
    }

    onBackButtonClick(): void {
        this._router.navigate(['/employees']);
    }
}