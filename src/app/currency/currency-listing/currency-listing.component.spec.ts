import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyListingComponent } from './currency-listing.component';

describe('CurrencyListingComponent', () => {
  let component: CurrencyListingComponent;
  let fixture: ComponentFixture<CurrencyListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
