import { BrowserModule } from '@angular/platform-browser';
import { NgModule, VERSION } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaskDirective } from './mask.directive';

console.log(VERSION.full);

@NgModule({
  declarations: [
    AppComponent,
    MaskDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
