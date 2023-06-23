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

      },

      {
        path: '',
        loadChildren: () => import('../user-management/user-management.module').then((mode) => mode.UserManagementModule)
      },

      {
        path: '',
        loadChildren: () => import('../price/price.module').then((mode) => mode.PriceModule)
      },
      {
        path: '',
        loadChildren: () => import('../area/area.module').then((mode) => mode.AreaModule)
      },
      {
        path: '',
        loadChildren: () => import('../tools/tools.module').then((mode) => mode.ToolsModule)
      },
      {
        path: '',
        loadChildren: () => import('../profile-setting/profile-setting.module').then((mode) => mode.ProfileSettingModule)
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
