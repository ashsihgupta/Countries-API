import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../countries.service';



@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countrydata:any=[];
  
  selectedcountry:string;
  displaycountry:any=[];
  
  

  constructor(private service:CountriesService) { }

  ngOnInit() {
   this.getData();

   
  }


  getData()
  {
    this.service.getCountries().subscribe((data)=>
    {
      this.countrydata=data;
      console.log(this.countrydata[10].name)
      
    })
  }


  

  countrychanged()
  {
    
    this.displaycountry=this.countrydata.filter(data => data.name=== this.selectedcountry);
   


  }

  

  


  

}