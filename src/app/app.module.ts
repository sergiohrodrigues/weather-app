import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { ToastModule } from 'primeng/toast'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherComponent } from './modules/wheater/page/weather-home/weather.component';
import { WeatherCardComponent } from './modules/wheater/componentes/weather-card/weather-card.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    // PrimeNg
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
