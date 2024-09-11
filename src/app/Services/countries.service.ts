import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country, Holiday, LongWeekend } from '../models/models';



@Injectable({
  providedIn: 'root'
})
export class CountriesService {

	url: string = 'https://date.nager.at/api/v3/AvailableCountries';
	
  constructor(private http: HttpClient) { }

  getAllCountries() {
	return this.http.get<Country[]>(`${this.url}`)
  }
  

  getCountry(year: number, countryCode: string) {
	const url = `https://date.nager.at/api/v3/publicholidays/${year}/${countryCode}`;
	return this.http.get<Holiday[]>(url);
 }
 getLongWeekends(countryCode: string, year: number) {
	const url = `https://date.nager.at/api/v3/LongWeekend/${year}/${countryCode}`;
	return this.http.get<LongWeekend[]>(url);
 }
 getNextHoliday(countryCode: string) {
	const holidayUrl = `https://date.nager.at/api/v3/NextPublicHolidays/${countryCode}`;
	return this.http.get<any[]>(holidayUrl);
 }
 
}


