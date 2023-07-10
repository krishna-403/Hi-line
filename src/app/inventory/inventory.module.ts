import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { ReturnInventoryComponent } from './return-inventory/return-inventory.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { InventoryLogComponent } from './inventory-log/inventory-log.component';
import { InventoryNavComponent } from './inventory-nav/inventory-nav.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    ReturnInventoryComponent,
    AddInventoryComponent,
    InventoryLogComponent,
    InventoryNavComponent,
    EditJobComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class InventoryModule { }
