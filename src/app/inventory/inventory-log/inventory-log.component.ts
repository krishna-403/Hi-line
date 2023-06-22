import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
@Component({
  selector: 'app-inventory-log',
  templateUrl: './inventory-log.component.html',
  styleUrls: ['./inventory-log.component.scss']
})
export class InventoryLogComponent {
   constructor(public general:LoginServiceService){}
}
