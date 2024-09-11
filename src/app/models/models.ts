export interface Country {
	countryCode:string
    name:string
}

export interface Holiday {
	date: string;
	localName: string; 
	name: string;
	countryCode: string; 
	fixed:boolean;
	global:boolean;
	counties:string[] | null;
	launchYear: number | null;
	type: string;
}


export interface LongWeekend {
	startDate: string;
	endDate: string;
	dayCount: number;
	needBridgeDay: boolean;
 }
 

 export interface CountryHoliday {
  country: string;
  holidayName: string;
  holidayDate: string;
  countryCode: string; 
}