import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    defaultAge = 2;
    game = '';
    colors = ['red', 'green', 'blue'];


    @ViewChild('f') signupForm: NgForm;

    // onSubmit(form: NgForm) {
    //     console.log(form);
    // }

    onAgeChange(age: string) {
        console.log('on change... ' + age);
        switch (age) {
            case '1': this.game = 'tetris'; break;
            case '2': this.game = 'pokemon'; break;
            case '3': this.game = 'farcry'; break;
        }
    }

    fillWithDefaults() {
        this.signupForm.form.setValue({
            name: 'Joel',
            age: 1,
            game: 'tetris',
            color: 'green'
        });
    }

    fillName() {
        this.signupForm.form.patchValue({
            name: 'xxx'
        });
    }

    onSubmit() {
        console.log(this.signupForm);
    }
}
