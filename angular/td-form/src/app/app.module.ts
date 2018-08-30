import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HiliteDirective } from './hilite.directive';
import { RainbowDirective } from './rainbow.directive';
import { Rainbow2Directive } from './rainbow2.directive';
import { UppercaseDirective } from './uppercase.directive';
import { TestDirective } from './test.directive';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorPickerRequiredDirective } from './color-picker-required.directive';

@NgModule({
    declarations: [AppComponent, HiliteDirective, RainbowDirective, Rainbow2Directive, UppercaseDirective, TestDirective, ColorPickerComponent, ColorPickerRequiredDirective],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
