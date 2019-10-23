import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CountriesService {

  constructor(private http:Http) { }

  getCountries():Observable<any[]>{
    return this.http.get("https://restcountries.eu/rest/v2/all")
    .pipe(map((data)=>data.json()))

  }

}