import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../inventory/inventory.module').then((mode) => mode.InventoryModule)
      }

    ]
  },

  // {
  //   path: 'inventory',
  //   component: InventoryModule
  // },


];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
