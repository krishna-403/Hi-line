import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { ManagementComponent } from './management/management.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ManagementComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    SharedModule
  ]
})
export class UserManagementModule { }
