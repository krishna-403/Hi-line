import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
@Component({
  selector: 'app-inventory-log',
  templateUrl: './inventory-log.component.html',
  styleUrls: ['./inventory-log.component.scss']
})
export class InventoryLogComponent {
  constructor(public general: LoginServiceService) { }



  public check = false;


  //function to change all input checkbox in one click

  change_input_check(event: any) {
    if (event.target.checked == true) {
      this.check = true;
    }
    else {
      this.check = false;
    }
  }



  public data = [
    {
      id: 1,
      job_num: 123456,
      job_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, voluptas minus.',
      date: '10 / 22 / 2019',
      quantity: 24,
      invoiced: 'open',

    },
    {
      id: 2,
      job_num: 123456,
      job_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, voluptas minus.',
      date: '10 / 22 / 2019',
      quantity: 24,
      invoiced: 'open',
    },
    {
      id: 3,
      job_num: 123456,
      job_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, voluptas minus.',
      date: '10 / 22 / 2019',
      quantity: 24,
      invoiced: 'open',
    },
    {
      id: 4,
      job_num: 123456,
      job_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, voluptas minus.',
      date: '10 / 22 / 2019',
      quantity: 24,
      invoiced: 'open',

    },
    {
      id: 5,
      job_num: 123456,
      job_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, voluptas minus.',
      date: '10 / 22 / 2019',
      quantity: 24,
      invoiced: 'open',
      checks: false

    },
    {
      id: 6,
      job_num: 123456,
      job_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, voluptas minus.',
      date: '10 / 22 / 2019',
      quantity: 24,
      invoiced: 'open',

    }
  ]
}
