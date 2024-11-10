import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCurrencyComponent } from './sell-currency.component';

describe('SellCurrencyComponent', () => {
  let component: SellCurrencyComponent;
  let fixture: ComponentFixture<SellCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellCurrencyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
