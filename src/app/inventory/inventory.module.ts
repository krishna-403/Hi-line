import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { ReturnInventoryComponent } from './return-inventory/return-inventory.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { InventoryLogComponent } from './inventory-log/inventory-log.component';
import { InventoryNavComponent } from './inventory-nav/inventory-nav.component';


@NgModule({
  declarations: [
    ReturnInventoryComponent,
    AddInventoryComponent,
    InventoryLogComponent,
    InventoryNavComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
