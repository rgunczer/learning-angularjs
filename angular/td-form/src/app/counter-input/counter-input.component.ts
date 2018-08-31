import { Component, OnInit, Input, OnChanges, forwardRef } from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
    NG_VALIDATORS,
    FormControl
} from '@angular/forms';

export function createCounterRangeValidator(maxValue, minValue) {
    return function validateCounterRange(c: FormControl) {
        const err = {
            rangeError: {
                given: c.value,
                max: maxValue,
                min: minValue
            }
        };
        return c.value > maxValue || c.value < minValue ? err : null;
    };
}

@Component({
    selector: 'app-counter-input',
    templateUrl: './counter-input.component.html',
    styleUrls: ['./counter-input.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: CounterInputComponent,
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            // useValue: validateCounterRange,
            // useExisting: forwardRef(() => CounterInputComponent),
            useExisting: CounterInputComponent,
            multi: true
        }
    ]
})
export class CounterInputComponent
    implements OnInit, ControlValueAccessor, OnChanges {
    @Input()
    counterValue: number = 0; // tslint:disable-line no-inferrable-types

    @Input()
    counterRangeMax;

    @Input()
    counterRangeMin;
    validateFn: any = () => {};

    propagateChange = (_: any) => {};

    constructor() {}

    ngOnInit() {
        this.validateFn = createCounterRangeValidator(
            this.counterRangeMax,
            this.counterRangeMin
        );
    }

    ngOnChanges(changes) {
        if (changes.counterRangeMin || changes.counterRangeMax) {
            this.validateFn = createCounterRangeValidator(
                this.counterRangeMax,
                this.counterRangeMin
            );
        }
    }

    validate(c: FormControl) {
        return this.validateFn(c);
    }

    increment() {
        this.counterValue++;
        this.propagateChange(this.counterValue);
    }

    decrement() {
        this.counterValue--;
        this.propagateChange(this.counterValue);
    }

    writeValue(value: any) {
        if (value !== undefined) {
            this.counterValue = value;
        }
    }

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any) {}
}
