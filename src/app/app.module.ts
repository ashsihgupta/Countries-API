import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import {CommonModule} from '@angular/common';

import { CountriesService } from './countries.service';
import { CountryComponent } from './country/country.component';
import {LanguageComponent} from './language/language.component';
import { CurrencyComponent } from './currency/currency.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ,FormsModule,CommonModule,RoutingModule],
  declarations: [ AppComponent,CountryComponent,CurrencyComponent,LanguageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CountriesService]
})
export class AppModule { }
