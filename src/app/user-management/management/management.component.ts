import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { TableDataService } from 'src/app/services/table-data.service';
import { PasswordPipe } from 'src/app/shared/pipes/password.pipe';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
})
export class ManagementComponent implements OnInit {

  constructor(public general: LoginServiceService, private management: TableDataService, public maskString: PasswordPipe) { }

  openDeleteModal = false;
  deleteId: any;


  ngOnInit(): void {
    this.user_management()
  }

  user_management_data: any
  public check = false;


  change_input_check(event: any) {
    if (event.target.checked == true) {
      this.check = true;
    }
    else {
      this.check = false;
    }
  }

  user_management() {
    this.management.user_management_table().subscribe((res) => {

      console.log(res);
      this.user_management_data = res;
    })
  }

  closeModal(event: boolean) {
    console.log(event)
    this.openDeleteModal = event;
  }

  send_id(id: any) {
    console.log(id)
    this.deleteId = id;
    this.openDeleteModal = true;
  }

  deleteData(id: any) {
    this.management.delete_user_management(id).subscribe((res) => {
      console.log(res)
      this.user_management();
    })
  }

}


