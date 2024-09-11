import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Country } from 'src/app/models/models';
import { CountriesService } from 'src/app/Services/countries.service';

@Component({
  selector: 'app-country-home',
  templateUrl: './country-home.component.html',
  styleUrls: ['./country-home.component.scss']
})
export class CountryHomeComponent implements OnInit, OnDestroy {
  country: Country[] = [];
  filteredCountries: Country[] = [];
  filterCountry: string = '';
  private subscriptions: Subscription = new Subscription();

  constructor(private service: CountriesService) {}

  ngOnInit(): void {
    const subscriptions = this.service.getAllCountries().subscribe((data: Country[]) => {
      this.country = data;
      this.filteredCountries = data; 
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe(); 
  }

  filterCountries(): void {
    const term = this.filterCountry.toLowerCase();
    this.filteredCountries = this.country.filter(country =>
      country.name.toLowerCase().includes(term)
    );
  }
}
