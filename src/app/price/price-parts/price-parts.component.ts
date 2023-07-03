import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-price-parts',
  templateUrl: './price-parts.component.html',
  styleUrls: ['./price-parts.component.scss']
})
export class PricePartsComponent {

  constructor(public general:LoginServiceService){}



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


  public part_management_data = [
    {
      id: 1,
      part: 123456,
      part_desc: 'This is part description long text',
      cost_ea: '3, 300.00',
      price_ea: '3, 400.00',
      
    },
    {
      id: 1,
      part: 123456,
      part_desc: 'This is part description long text',
      cost_ea: '3, 300.00',
      price_ea: '3, 400.00',

    },
    {
      id: 1,
      part: 123456,
      part_desc: 'This is part description long text',
      cost_ea: '3, 300.00',
      price_ea: '3, 400.00',

    },
    {
      id: 1,
      part: 123456,
      part_desc: 'This is part description long text',
      cost_ea: '3, 300.00',
      price_ea: '3, 400.00',

    },
    {
      id: 1,
      part: 123456,
      part_desc: 'This is part description long text',
      cost_ea: '3, 300.00',
      price_ea: '3, 400.00',

    },
    {
      id: 1,
      part: 123456,
      part_desc: 'This is part description long text',
      cost_ea: '3, 300.00',
      price_ea: '3, 400.00',

    },
    {
      id: 1,
      part: 123456,
      part_desc: 'This is part description long text',
      cost_ea: '3, 300.00',
      price_ea: '3, 400.00',

    },
    
  ]

}
