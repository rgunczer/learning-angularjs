import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  fullNameLength = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: [''],
      skills: this.fb.group({
        skillName: [''],
        experienceInYears: [''],
        proficiency: ['beginner']
      })
    });
    // this.employeeForm.get('fullName').valueChanges.subscribe((value: string) => {
    //   // console.log(value);
    //   this.fullNameLength = value.length;
    // });
    // this.employeeForm.valueChanges.subscribe((value: any) => {
    //   console.log(JSON.stringify(value));
    // });
    this.employeeForm.get('skills').valueChanges.subscribe((value: any) => {
      console.log('skills: ', JSON.stringify(value));
    });
  }

  logKeyValuePairs(group: FormGroup): void {
    // console.log(Object.keys(group.controls));
    // Object.keys(group.controls).forEach((key: string) => {
    //   const abstractControl = group.get(key);
    //   if (abstractControl instanceof FormGroup) {
    //     this.logKeyValuePairs(abstractControl);
    //   } else {
    //     // console.log(`Key = ${key}, Value = ${abstractControl.value}`);
    //     abstractControl.disable();
    //   }
    // });
    this.employeeForm.get('skills').disable();
  }

  onLogKeyValuePairs(): void {
    this.logKeyValuePairs(this.employeeForm);
  }

  onLoadData(): void {
    // this.employeeForm.setValue({
    this.employeeForm.patchValue({
      fullName: 'Full Name',
      email: 'email@email.com',
      skills: {
        skillName: 'c++',
        experienceInYears: 1,
        proficiency: 'beginner'
      }
    });
  }

  onSubmit(): void {
    console.log(this.employeeForm.touched);
    console.log(this.employeeForm.value);

    console.log(this.employeeForm.controls.fullName.touched);
    console.log(this.employeeForm.get('fullName').value);

  }

}
