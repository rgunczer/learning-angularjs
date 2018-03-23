"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    //public code: string;
    //public name: string;
    //public gender: string;
    //public annualSalary: number;
    //public dateOfBirth: string;
    function Employee(code, name, gender, annualSalary, dateOfBirth) {
        this.code = code;
        this.name = name;
        this.gender = gender;
        this.annualSalary = annualSalary;
        this.dateOfBirth = dateOfBirth;
        //this.code = code;
        //this.name = name;
        //this.gender = gender;
        //this.annualSalary = annualSalary;
        //this.dateOfBirth = dateOfBirth;
    }
    Employee.prototype.computeMonthlySalary = function (annualSalary) {
        return annualSalary / 12;
    };
    return Employee;
}());
exports.Employee = Employee;
var TestClass = /** @class */ (function () {
    //private firstName: string;
    //private lastName: string;
    //    constructor(firstName: string, lastName: string) {
    //this.firstName = firstName;
    //this.lastName = lastName;
    //    }
    function TestClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return TestClass;
}());
exports.TestClass = TestClass;
//# sourceMappingURL=employee.js.map