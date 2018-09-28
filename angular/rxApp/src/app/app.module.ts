import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DxButtonModule, DxCalendarModule, DxPopupModule, DxPopoverModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';

import { HttpClientModule  } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DxButtonModule,
    DxCalendarModule,
    DxPopupModule,
    DxPopoverModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
