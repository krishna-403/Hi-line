import { Component } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  constructor(private routes:Router){}


  reset_p = new FormGroup({
    password: new FormControl('', [Validators.required])
  })


  reset() {
    console.log(this.reset_p.value);
    this.routes.navigate([''])
    

  }

  get password() {
    return this.reset_p.get('password');
  }

}
