import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceRoutingModule } from './price-routing.module';
import { PricePartsComponent } from './price-parts/price-parts.component';


@NgModule({
  declarations: [
    PricePartsComponent
  ],
  imports: [
    CommonModule,
    PriceRoutingModule
  ]
})
export class PriceModule { }
