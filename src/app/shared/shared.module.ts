import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';
import { PasswordPipe } from './pipes/password.pipe';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    ModalDeleteComponent,
    PasswordPipe,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,

  ],
  exports: [ModalDeleteComponent, PasswordPipe, PaginationComponent]

})
export class SharedModule { }
