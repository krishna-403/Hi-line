import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceRoutingModule } from './price-routing.module';
import { PricePartsComponent } from './price-parts/price-parts.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PricePartsComponent
  ],
  imports: [
    CommonModule,
    PriceRoutingModule,
    SharedModule
  ]
})
export class PriceModule { }
