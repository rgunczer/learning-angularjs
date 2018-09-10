import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OnlyNumberDirective } from './only-number.directive';
import { DraggableDirective } from './draggable.directive';
import { DropTargetDirective } from './drop-target.directive';
import { UpperCaseDirective } from './upper-case.directive';

@NgModule({
  declarations: [
    AppComponent,
    OnlyNumberDirective,
    DraggableDirective,
    DropTargetDirective,
    UpperCaseDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
