import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../layout/main/main.component';
import { InventoryNavComponent } from './inventory-nav/inventory-nav.component';
import { LoginAuthGuard } from '../guard/login-auth.guard';
import { EditJobComponent } from './edit-job/edit-job.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [

  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '', redirectTo: 'inventory', pathMatch: 'full'
      },
      {
        path: 'inventory', component: InventoryNavComponent
      },
      {
        path:'inventory/edit',component:EditJobComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
