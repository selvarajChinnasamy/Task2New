import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StateComponent } from './state/state.component';
import { DistrictComponent } from './district/district.component';
import { CityComponent } from './city/city.component';
import {DataServiceService } from './data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    DistrictComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
