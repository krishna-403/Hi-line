import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryLogComponent } from './inventory-log.component';

describe('InventoryLogComponent', () => {
  let component: InventoryLogComponent;
  let fixture: ComponentFixture<InventoryLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
