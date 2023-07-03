import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent {

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



  public user_management_data = [
    {
      id: 1,
      employee_id: 123456,
      employee_name: 'Connie Watson',
      email: 'connie.watson@example.com',
      role: 'Manager',
      password: '********',
      password_reset: 'Reset',
    },
    {
      id: 1,
      employee_id: 123456,
      employee_name: 'Connie Watson',
      email: 'connie.watson@example.com',
      role: 'Manager',
      password: '********',
      password_reset: 'Reset',
    },
    {
      id: 1,
      employee_id: 123456,
      employee_name: 'Connie Watson',
      email: 'connie.watson@example.com',
      role: 'Manager',
      password: '********',
      password_reset: 'Reset',
    },
    {
      id: 1,
      employee_id: 123456,
      employee_name: 'Connie Watson',
      email: 'connie.watson@example.com',
      role: 'Manager',
      password: '********',
      password_reset: 'Reset',
    },
    {
      id: 1,
      employee_id: 123456,
      employee_name: 'Connie Watson',
      email: 'connie.watson@example.com',
      role: 'Manager',
      password: '********',
      password_reset: 'Reset',
    }
  ]
}


