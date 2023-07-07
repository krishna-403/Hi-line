import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { TableDataService } from 'src/app/services/table-data.service';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent {

  // @Input() id: any;
  @Input() deleteId: any;
  @Output() closeMdl = new EventEmitter<any>();
  @Output() deleteData = new EventEmitter<any>();
  constructor(public general: LoginServiceService, private routes: Router, private table_data: TableDataService) { }



  // ngOnInit() {
  //   this.closeModal
  // }
  // data: any

  // delete_row(id: any) {
  //   console.log(id)
  //   // this.table_data.delete(id).subscribe((res) => {
  //   //   console.log(res)
  //   // })
  // }

  // inventory_log() {
  //   this.table_data.inventory_table().subscribe((res) => {
  //     console.log(res);
  //     this.data = res;
  //   })
  // }  

  delete_id(id: any) {
    console.log(id)
    this.deleteData.emit(id);
    this.closeMdl.emit(false);
  }

  closeModal() {
    this.closeMdl.emit(false);
  }

}

