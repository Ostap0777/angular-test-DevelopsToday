import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryHomeComponent } from './Components/country-home/country-home.component';
import { CountryIDComponent } from './Components/country-id/country-id.component';
const routes: Routes = [
	{path:'', component: CountryHomeComponent },
	{path: 'country/:countryCode', component:CountryIDComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
