import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { MovableDirective } from './movable.directive';

declare var $: any;

console.log('jQuery version: ' + $.fn.jquery);
console.log('jQuery ui version: ' + $.ui.version);

@NgModule({
  declarations: [
    AppComponent,
    MovableDirective
  ],
  imports: [
    BrowserModule,
    DxButtonModule,
    DxDataGridModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
