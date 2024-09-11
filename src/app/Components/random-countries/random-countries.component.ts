import { Component, OnInit } from '@angular/core';
import { Country, CountryHoliday, Holiday } from 'src/app/models/models';
import { CountriesService } from 'src/app/Services/countries.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-random-countries',
  templateUrl: './random-countries.component.html',
  styleUrls: ['./random-countries.component.scss']
})
export class RandomCountriesComponent implements OnInit {
  selectedCountries: Country[] = [];
  countryHolidays: CountryHoliday[] = [];

  constructor(private countryService: CountriesService) { }

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe(countries => {
      this.selectedCountries = this.getRandomCountries(countries, 3);
      this.selectedCountries.forEach(country => {
        this.countryService.getNextHoliday(country.countryCode).subscribe(holidays => {
          const sortedHolidays = holidays.sort((a, b) =>
            new Date(a.date).getTime() - new Date(b.date).getTime()
          );
          const nextHoliday = sortedHolidays[0];

          this.countryHolidays.push({
            country: country.name,
            holidayName: nextHoliday.name,
            holidayDate: nextHoliday.date,
            countryCode: country.countryCode 
          });
        });
      });
    });
  }

  getRandomCountries(countries: Country[], count: number): Country[] {
    const shuffled = [...countries].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
