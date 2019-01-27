import { Component, ViewChild } from '@angular/core';
import { MyModalComponent } from './my-modal/my-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    :host {
      display: block;
      border: 2px solid orange;
      background: gray;
    }
  `]
})
export class AppComponent {
  title = 'modalTestApp';
  @ViewChild(MyModalComponent) myModal: MyModalComponent;

  showModal() {
    this.myModal.showModal();
  }

}
