import { Component } from '@angular/core';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dxApp';

  sayHello() {
    console.log('say hello...');
  }
}
