import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';

import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { MyModalComponent } from './my-modal/my-modal.component';
import { MyContentComponent } from './my-content/my-content.component';
import { MyGridContentComponent } from './my-grid-content/my-grid-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MyModalComponent,
    MyContentComponent,
    MyGridContentComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    DxButtonModule,
    DxDataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
