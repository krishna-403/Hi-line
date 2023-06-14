import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../layout/main/main.component';
import { InventoryNavComponent } from './inventory-nav/inventory-nav.component';

const routes: Routes = [

  {
    path: 'inventory',
    component: InventoryNavComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
