import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DxButtonModule, DxDataGridModule, DxPieChartModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { BurgerComponent } from './burger/burger.component';
import { ReportingComponent } from './reporting/reporting.component';
import { ChartsComponent } from './charts/charts.component';

declare var $: any;

console.log('jQuery version: ' + $.fn.jquery);

@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    ReportingComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DxButtonModule,
    DxDataGridModule,
    DxPieChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
