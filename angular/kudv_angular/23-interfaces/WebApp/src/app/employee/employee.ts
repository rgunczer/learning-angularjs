export interface IEmployee {
    code: string;
    name: string;
    gender: string;
    annualSalary: number;
    dateOfBirth: string;
    department?: string;

    computeMonthlySalary(annualSalary: number): number;
}

export class Employee implements IEmployee {
    //public code: string;
    //public name: string;
    //public gender: string;
    //public annualSalary: number;
    //public dateOfBirth: string;

    constructor(public code: string, public name: string, public gender: string, public annualSalary: number, public dateOfBirth: string) {
        //this.code = code;
        //this.name = name;
        //this.gender = gender;
        //this.annualSalary = annualSalary;
        //this.dateOfBirth = dateOfBirth;
    }

    computeMonthlySalary(annualSalary: number): number {
        return annualSalary / 12;
    }
}

export class TestClass {
    //private firstName: string;
    //private lastName: string;

//    constructor(firstName: string, lastName: string) {
        //this.firstName = firstName;
        //this.lastName = lastName;
//    }
    constructor(private firstName: string, private lastName: string) {
    }
}