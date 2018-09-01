import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { SecondChildCompComponent } from './second-child-comp/second-child-comp.component';
import { ThirdChildCompComponent } from './third-child-comp/third-child-comp.component';
import { TimerComponent } from './timer/timer.component';
import { ViaServiceComponent } from './via-service/via-service.component';
import { StartupDataProvider } from './startup-data-provider';

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
    ViaServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    StartupDataProvider,
    {
      provide: APP_INITIALIZER,
      useFactory: startupDataProviderFactory,
      deps: [StartupDataProvider],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
