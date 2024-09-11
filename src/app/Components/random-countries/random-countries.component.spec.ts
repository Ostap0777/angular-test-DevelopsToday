import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCountriesComponent } from './random-countries.component';

describe('RandomCountriesComponent', () => {
  let component: RandomCountriesComponent;
  let fixture: ComponentFixture<RandomCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomCountriesComponent]
    });
    fixture = TestBed.createComponent(RandomCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
