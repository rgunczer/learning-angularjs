import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OnlyNumberDirective } from './only-number.directive';
import { DraggableDirective } from './draggable.directive';
import { DropTargetDirective } from './drop-target.directive';

@NgModule({
  declarations: [
    AppComponent,
    OnlyNumberDirective,
    DraggableDirective,
    DropTargetDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
