import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DxButtonModule, DxDataGridModule, DxPieChartModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { BurgerComponent } from './burger/burger.component';

declare var $: any;

console.log('jQuery version: ' + $.fn.jquery);

@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent
  ],
  imports: [
    BrowserModule,
    DxButtonModule,
    DxDataGridModule,
    DxPieChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
