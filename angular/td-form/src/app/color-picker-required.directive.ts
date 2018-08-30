import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
    selector: 'app-color-picker[required]', // tslint:disable-line:directive-selector
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: ColorPickerRequiredDirective,
            multi: true
        }
    ]
})
export class ColorPickerRequiredDirective implements Validator {

    validate(c: FormControl) {
        // console.log('validate', c);
        if (!c.value) {
            return {
                'required': 'Please choose a color.'
            };
        }
        return null;
    }
}
