import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePartsComponent } from './price-parts.component';

describe('PricePartsComponent', () => {
  let component: PricePartsComponent;
  let fixture: ComponentFixture<PricePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricePartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
