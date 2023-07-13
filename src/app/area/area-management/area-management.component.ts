import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { TableDataService } from 'src/app/services/table-data.service';

@Component({
  selector: 'app-area-management',
  templateUrl: './area-management.component.html',
  styleUrls: ['./area-management.component.scss']
})
export class AreaManagementComponent {

  constructor(public general: LoginServiceService, private area_management_table: TableDataService) { }

  check = false;
  openDeleteModal = false;
  deleteId: any;

  ngOnInit(): void {
    this.area_management()
  }

  area_management_data: any

  change_input_check(event: any) {
    if (event.target.checked == true) {
      this.check = true;
    }
    else {
      this.check = false;
    }
  }

  area_management() {
    this.area_management_table.area_management_table().subscribe((res) => {
      console.log(res);
      this.area_management_data = res;
    })
  }


  closeModal(event: boolean) {
    console.log(event)
    this.openDeleteModal = event;
  }

  deleteData(id: any) {
    this.area_management_table.delete_area_management(id).subscribe((res) => {
      console.log(res)
      this.area_management()
    })
  }

  send_id(id: any) {
    this.deleteId = id;
    console.log(id)
    this.openDeleteModal = true;

  }

}
