import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent {

  constructor(private routes:Router){

  }

  forgotForm = new FormGroup({

    companyCode: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),

  })


forgot_p(){
  console.log(this.forgotForm.value);
  this.routes.navigate(['/verify'])  

}

get companyCode(){
return this.forgotForm.get('companyCode');
}

  get email() {
    return this.forgotForm.get('email');
  }



}




