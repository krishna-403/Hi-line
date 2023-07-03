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

  inventory_data: any


  //function to change all input checkbox in one click

  change_input_check(event: any) {
    if (event.target.checked == true) {
      this.check = true;
    }
    else {
      this.check = false;
    }
  }

  inventory_log() {
    this.inventory.table_data().subscribe((res) => {

      console.log(res);
      this.inventory_data=res;
    })
  }

}
