import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-price-parts',
  templateUrl: './price-parts.component.html',
  styleUrls: ['./price-parts.component.scss']
})
export class PricePartsComponent {

  constructor(public general:LoginServiceService){}

}
