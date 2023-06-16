import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricePartsComponent } from './price-parts/price-parts.component';

const routes: Routes = [
  {
    path: 'price',
    component: PricePartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceRoutingModule { }
