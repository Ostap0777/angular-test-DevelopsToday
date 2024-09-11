import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryIDComponent } from './Components/country-id/country-id.component';
import { CountryHomeComponent } from './Components/country-home/country-home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RandomCountriesComponent } from './Components/random-countries/random-countries.component';




@NgModule({
  declarations: [
    AppComponent,
    CountryIDComponent,
    CountryHomeComponent,
    HeaderComponent,
    FooterComponent,
    RandomCountriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	 HttpClientModule,
	 FormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
