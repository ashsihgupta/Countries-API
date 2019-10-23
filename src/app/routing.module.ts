import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CountryComponent } from './country/country.component';
 import { LanguageComponent } from './language/language.component';
 import { CurrencyComponent } from './currency/currency.component';

@NgModule({
  
  imports: [
    RouterModule.forRoot([
      { path: '', component: CountryComponent },
      { path: 'language', component: LanguageComponent },
      { path: 'currency', component: CurrencyComponent }
      
      
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class RoutingModule {}


