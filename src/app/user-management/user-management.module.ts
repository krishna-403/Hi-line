import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { ManagementComponent } from './management/management.component';
import { SharedModule } from '../shared/shared.module';
import { PasswordPipe } from '../shared/pipes/password.pipe';

@NgModule({
  declarations: [
    ManagementComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    SharedModule
  ],
  providers: [
    PasswordPipe 
  ]
})
export class UserManagementModule { }
