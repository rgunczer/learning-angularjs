import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { UserPreferencesService } from './userPreferences.service';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    //providers: [EmployeeService]
    // providers: [UserPreferencesService]
})
export class EmployeeListComponent  implements OnInit {
    employees: IEmployee[];

    selectedEmployeeCountRadioButton: string = 'All';

    statusMessage: string = 'Loading data.Please wait...';

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

    //private _userPreferencesService: UserPreferencesService;

    constructor(
        private _employeeService: EmployeeService,
        private _userPreferencesService: UserPreferencesService
    ) {
        //this._userPreferencesService = new UserPreferencesService();
    }

    ngOnInit() {
        console.log('ngOnInit...');

        this._employeeService.getEmployees()
            .subscribe(
            (employeeData) => {
                this.employees = employeeData;
            },
            (error) => {
                this.statusMessage = 'Problem with the service. Please try again later.';
                console.error(error);
            });
    }

    getTotalEmployeesCount() : number {
        return this.employees.length;
    }

    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Male').length;
    }

    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }

    // getter in TS
    get color(): string {
        return this._userPreferencesService.colorPreference;
    }

    // setter TS
    set color(value: string) {
        this._userPreferencesService.colorPreference = value;
    }
}