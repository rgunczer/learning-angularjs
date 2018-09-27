import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DxButtonModule, DxCalendarModule, DxPopupModule } from 'devextreme-angular';

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
    DxPopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
