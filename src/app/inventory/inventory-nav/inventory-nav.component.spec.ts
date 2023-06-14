import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryNavComponent } from './inventory-nav.component';

describe('InventoryNavComponent', () => {
  let component: InventoryNavComponent;
  let fixture: ComponentFixture<InventoryNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
