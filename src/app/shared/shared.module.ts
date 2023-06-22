import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';


@NgModule({
  declarations: [
    ModalDeleteComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,

  ],
  exports: [ModalDeleteComponent]

})
export class SharedModule { }
