// src/app/Components/country-id/country-id.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from 'src/app/Services/countries.service';
import { Holiday, LongWeekend } from 'src/app/models/models';

@Component({
  selector: 'app-country-id',
  templateUrl: './country-id.component.html',
  styleUrls: ['./country-id.component.scss']
})
export class CountryIDComponent implements OnInit {
  countryName: string | null = null;
  holidays: Holiday[] = [];
  longWeekends: LongWeekend[] = [];
  private countryCode: string | null = null;
  years: number[] = Array.from({ length: 11 }, (_, i) => 2020 + i);
  selectedYear: number = new Date().getFullYear(); 

  constructor( private route: ActivatedRoute, private service: CountriesService
  ) {}

  ngOnInit(): void {
	this.route.paramMap.subscribe(params => {
	  this.countryCode = params.get('countryCode');
	  if (this.countryCode) {
		 this.service.getCountry(this.selectedYear, this.countryCode).subscribe(data => {
			this.holidays = data;
		 });
		 this.service.getLongWeekends(this.countryCode, this.selectedYear).subscribe(data => {
			this.longWeekends = data;
		 });
	  }
	});
 }
 
 onYearChange(year: number) {
	this.selectedYear = year;
	if (this.countryCode) {
	  this.service.getCountry(this.selectedYear, this.countryCode).subscribe(data => {
		 this.holidays = data;
	  });
	  this.service.getLongWeekends(this.countryCode, this.selectedYear).subscribe(data => {
		 this.longWeekends = data;
	  });
	}
 }
 isHolidayInLongWeekend(holiday: Holiday, longWeekend: LongWeekend): boolean {
	const holidayDate = new Date(holiday.date);
	const startDate = new Date(longWeekend.startDate);
	const endDate = new Date(longWeekend.endDate);
	return holidayDate >= startDate && holidayDate <= endDate;
 }
} 