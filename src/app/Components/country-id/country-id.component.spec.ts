import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryIDComponent } from './country-id.component';

describe('CountryIDComponent', () => {
  let component: CountryIDComponent;
  let fixture: ComponentFixture<CountryIDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryIDComponent]
    });
    fixture = TestBed.createComponent(CountryIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
