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


  public check = false;



  area_management() {
    this.area_management_table.area_management_table().subscribe((res) => {
      console.log(res);
      this.area_management_data = res;
    })
  }
  


}
