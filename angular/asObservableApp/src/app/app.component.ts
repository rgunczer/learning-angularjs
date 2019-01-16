import { Component } from '@angular/core';
import { MyApiService } from './my-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asObservableApp';

  constructor(private myApiService: MyApiService) {}

  getData() {
    this.myApiService.getData()
      .subscribe(data => {
        console.log(data);
      });
  }
}
