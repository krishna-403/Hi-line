import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';
import { PasswordPipe } from './pipes/password.pipe';


@NgModule({
  declarations: [
    ModalDeleteComponent,
    PasswordPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,

  ],
  exports: [ModalDeleteComponent, PasswordPipe]

})
export class SharedModule { }
