import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { TableDataService } from 'src/app/services/table-data.service';

@Component({
  selector: 'app-price-parts',
  templateUrl: './price-parts.component.html',
  styleUrls: ['./price-parts.component.scss']
})
export class PricePartsComponent {

  constructor(public general: LoginServiceService, private part: TableDataService) { }

  ngOnInit(): void {
    this.part_management()
  }
  openDeleteModal = false;


  part_management_data: any

  check = false;
  deleteId: any;


  send_id(id: any) {
    console.log(id)
    this.deleteId = id;
    this.openDeleteModal = true;
  }


  //function to change all input checkbox in one click

  change_input_check(event: any) {
    if (event.target.checked == true) {
      this.check = true;
    }
    else {
      this.check = false;
    }
  }

  part_management() {
    this.part.part_management_table().subscribe((res) => {
      console.log(res);
      this.part_management_data = res;
    })
  }



}
