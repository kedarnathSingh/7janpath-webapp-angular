import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaoutUsComponent } from './abaout-us.component';

describe('AbaoutUsComponent', () => {
  let component: AbaoutUsComponent;
  let fixture: ComponentFixture<AbaoutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbaoutUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbaoutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
