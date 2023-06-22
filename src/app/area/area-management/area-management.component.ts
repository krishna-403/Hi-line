import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-area-management',
  templateUrl: './area-management.component.html',
  styleUrls: ['./area-management.component.scss']
})
export class AreaManagementComponent {

  constructor(public general: LoginServiceService) { }


}
