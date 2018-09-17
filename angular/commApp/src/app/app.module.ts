import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { SecondChildCompComponent } from './second-child-comp/second-child-comp.component';
import { ThirdChildCompComponent } from './third-child-comp/third-child-comp.component';
import { TimerComponent } from './timer/timer.component';
import { ViaServiceComponent } from './via-service/via-service.component';
import { StartupDataProvider } from './startup-data-provider';
import { MyDatePipe } from './my-date.pipe';
import { PopupDirective } from './popup.directive';
import { SearchBoxComponent } from './search-box/search-box.component';
import { MyFilterComponent } from './my-filter/my-filter.component';

export function startupDataProviderFactory(provider: StartupDataProvider) {
  return () => provider.load();
}

@NgModule({
  declarations: [
    AppComponent,
    ChildCompComponent,
    SecondChildCompComponent,
    ThirdChildCompComponent,
    TimerComponent,
    ViaServiceComponent,
    MyDatePipe,
    PopupDirective,
    SearchBoxComponent,
    MyFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    StartupDataProvider,
    {
      provide: APP_INITIALIZER,
      useFactory: startupDataProviderFactory,
      deps: [StartupDataProvider],
      multi: true
    },
    {
      provide: 'API_URL',
      useValue: 'http://my.api.com/v1'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
