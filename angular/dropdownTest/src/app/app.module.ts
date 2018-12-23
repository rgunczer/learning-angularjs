import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleDropDownComponent } from './simple-drop-down/simple-drop-down.component';
import { DropDownWithStringsComponent } from './drop-down-with-strings/drop-down-with-strings.component';
import { UseNgValueComponent } from './use-ng-value/use-ng-value.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleDropDownComponent,
    DropDownWithStringsComponent,
    UseNgValueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
