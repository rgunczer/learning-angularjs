import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { SecondChildCompComponent } from './second-child-comp/second-child-comp.component';
import { ThirdChildCompComponent } from './third-child-comp/third-child-comp.component';
import { TimerComponent } from './timer/timer.component';
import { ViaServiceComponent } from './via-service/via-service.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildCompComponent,
    SecondChildCompComponent,
    ThirdChildCompComponent,
    TimerComponent,
    ViaServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
