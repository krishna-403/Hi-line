import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { TableDataService } from 'src/app/services/table-data.service';
@Component({
  selector: 'app-inventory-log',
  templateUrl: './inventory-log.component.html',
  styleUrls: ['./inventory-log.component.scss']
})
export class InventoryLogComponent implements OnInit {
  constructor(public general: LoginServiceService, private inventory: TableDataService) { }

  ngOnInit(): void {
    this.inventory_log()
  }

  check = false;

  inventory_data: any;
  openDeleteModal: boolean = false;
  deleteId: any;

  //function to change all input checkbox in one click

  change_input_check(event: any) {
    if (event.target.checked == true) {
      this.check = true;
    }
    else {
      this.check = false;
    }
  }

  //table data

  inventory_log() {
    this.inventory.inventory_table().subscribe((res) => {

      console.log(res);
      this.inventory_data = res;
    })
  }


//delete data from table

  deleteData(id: any) {
    this.inventory.delete(id).subscribe((res) => {
      console.log(res)
      this.inventory_log();

    })
  }


   send_id(id: any) {
    this.deleteId = id;
    console.log(id)
    this.openDeleteModal = true;

  }

  closeModal(event: boolean) {
    console.log(event)
    this.openDeleteModal = event;
  }

  // delete_row(id: any) {
  //   console.log(id)
  //   // this.table_data.delete(id).subscribe((res) => {
  //   //   console.log(res)
  //   // })
  // }


}
