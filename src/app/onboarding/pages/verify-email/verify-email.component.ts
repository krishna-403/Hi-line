import { Component } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent {

  constructor (private routes:Router) {}

  verify = new FormGroup({
    code: new FormControl('', [Validators.required])
  })


  verifyCode() {
    console.log(this.verify.value);
    this.routes.navigate(['/reset'])
  }

  get code() {
    return this.verify.get('code')
  }

}

