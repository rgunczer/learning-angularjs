import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-color-picker',
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.css'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: ColorPickerComponent,
        multi: true
    }]
})
export class ColorPickerComponent implements ControlValueAccessor {
    @Input()
    colors: string[] = [];

    isDisabled = false;

    private onChange: (value: string) => void;

//    @Input()
    selectedColor: string;

    // @Output()
    // selectedColorChange = new EventEmitter<string>();

    selectColor(color: string) {
        if (!this.isDisabled) {
            this.selectedColor = color;
            // this.selectedColorChange.emit(color);
            this.onChange(color);
        }
    }

    writeValue(value: string) {
        if (!this.isDisabled) {
            this.selectedColor = value;
        }
    }

    registerOnChange(onChange: (value: string) => void) {
        this.onChange = onChange;
    }

    registerOnTouched() {}

    setDisabledState(isDisabled: boolean) {
        console.log('setDisabledState:', isDisabled);
        this.isDisabled = isDisabled;
    }
}
