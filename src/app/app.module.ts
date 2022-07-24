import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { NavMenuModule } from '../nav-menu/nav-menu.module';
import { EventServicesModule } from '../event-services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventReducer } from './store/reducers/event.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      eventItems: EventReducer as any
    }),
    EventServicesModule,
    NavMenuModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
