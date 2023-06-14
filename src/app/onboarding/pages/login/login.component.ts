import { Component } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {


  constructor(private routes: Router) { }

  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])

  })


loginHandle(){
  this.loginForm.value
}

  loginUser() {
    console.log(this.loginForm.value);
    // console.log(this.user?.value);


    this.routes.navigate(['/inventory'])
  }

  // get user() {
  //   return this.loginForm.get('user');
  // }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
