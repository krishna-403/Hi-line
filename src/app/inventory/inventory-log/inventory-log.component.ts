import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
@Component({
  selector: 'app-inventory-log',
  templateUrl: './inventory-log.component.html',
  styleUrls: ['./inventory-log.component.scss']
})
export class InventoryLogComponent {
  constructor(public general: LoginServiceService) { }




  // table_data: any = [];
  // DataAssign() {
  //   // this.table_data =//your data;
  //   // now check the array size
  //   // if (this.table_data.length <= 5) {
  //     for (let i = 0; i <=5; i++) {
  //       let obj = {
  //         id: 123456,
  //         job_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, voluptas minus.',
  //         date: '10/22/2019',
  //         quantity: 24,
  //         invoiced: 'open'
  //       };
  //       this.table_data.push(obj);
  //     }
  //   // }
  // }


  public data = [
    {
      id:1,
      job_num: 123456,
      job_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, voluptas minus.',
      date: '10 / 22 / 2019',
      quantity: 24,
      invoiced: 'open'
    },
    {
      id: 2,
      job_num: 123456,
      job_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, voluptas minus.',
      date: '10 / 22 / 2019',
      quantity: 24,
      invoiced: 'open'
    },
    {
      id: 3,
      job_num: 123456,
      job_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, voluptas minus.',
      date: '10 / 22 / 2019',
      quantity: 24,
      invoiced: 'open'
    },
    {
      id: 4,
      job_num: 123456,
      job_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, voluptas minus.',
      date: '10 / 22 / 2019',
      quantity: 24,
      invoiced: 'open'
    },
    {
      id: 5,
      job_num: 123456,
      job_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, voluptas minus.',
      date: '10 / 22 / 2019',
      quantity: 24,
      invoiced: 'open'
    },
    {
      id: 6,
      job_num: 123456,
      job_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, voluptas minus.',
      date: '10 / 22 / 2019',
      quantity: 24,
      invoiced: 'open'
    }
  ]
}
