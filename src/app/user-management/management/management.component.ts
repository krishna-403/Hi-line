import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { TableDataService } from 'src/app/services/table-data.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent {

  constructor(public general: LoginServiceService, private management: TableDataService) { }


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


}


