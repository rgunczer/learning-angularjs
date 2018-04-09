import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';
import { ISubscription } from 'rxjs/Subscription';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    //styles: ['table {color: #369;font-family: Arial, Helvetica, sans-serif;font-size: large;border-collapse: collapse;font-style: inherit;}td {border: 3px solid yellow;}']
    styleUrls: ['app/employee/employee.component.css']
})
export class EmployeeComponent implements OnInit {
    employee: IEmployee;
    statusMessage: string;
    retryCount: number = 1;
    subscribtion: ISubscription;

    constructor(
        private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router
    ) {
    }

    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];
        this.subscribtion = this._employeeService.getEmployeeByCode(empCode)
            //.retry(3)
            .retryWhen((err) => {
                return err.scan((retryCount, val) => {
                    retryCount += 1;
                    if (retryCount < 6) {
                        this.statusMessage = 'Retrying... Attempt #' + retryCount;
                        return retryCount;
                    } else {
                        throw (err);
                    }
                }, 0).delay(1000)
            })
            .subscribe(
            (employeeData) => {
                if (employeeData == null) {
                    this.statusMessage = "Employee does not exists";

                } else {
                    this.employee = employeeData
                }
            },
            (error) => {
                this.statusMessage = 'Problem with the service. Try again later';
                console.log(error);
            });
    }

    onBackButtonClick(): void {
        this._router.navigate(['/employees']);
    }

    onCancelButtonClick(): void {
        this.statusMessage = 'Request Cancelled';
        this.subscribtion.unsubscribe();
    }
}