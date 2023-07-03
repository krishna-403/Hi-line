import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-area-management',
  templateUrl: './area-management.component.html',
  styleUrls: ['./area-management.component.scss']
})
export class AreaManagementComponent {

  constructor(public general: LoginServiceService) { }

  change_input_check(event: any) {
    if (event.target.checked == true) {
      this.check = true;
    }
    else {
      this.check = false;
    }
  }


  public check = false;


  public area_management_data = [
    {
      id: 1,
      area: 'Lane 7',
    },
    {
      id: 1,
      area: 'Lane 7',
    },
    {
      id: 1,
      area: 'Lane 7',
    },
    {
      id: 1,
      area: 'Lane 7',
    },
    {
      id: 1,
      area: 'Lane 7',
    },
    {
      id: 1,
      area: 'Lane 7',
    },
  

   

  ]


}
