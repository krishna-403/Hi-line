import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaManagementComponent } from './area-management/area-management.component';

const routes: Routes = [
  {
    path: 'area',
    component: AreaManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaRoutingModule { }
