import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  constructor(private service:CountriesService) { }

  countrydata:any[]=[];
  cdata:any[]=[];
  selectedcountry:string;
  displaycountry:any=[];
  

  ngOnInit() {
    this.getData()
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
    console.log(this.selectedcountry);
    console.log(this.displaycountry);


  }

}