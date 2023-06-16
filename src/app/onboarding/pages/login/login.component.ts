import { Component } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {


  constructor(private routes: Router, private logindata: LoginServiceService) { }

  loginForm = new FormGroup({
    company_code: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])

  })


  // saveNewField(value: any) {
  //   console.log('value', value)
  // }


  loginUser(user_data:any) {
    console.log(this.loginForm.value);
    console.log("data",user_data)
    this.logindata.login(this.loginForm.value).subscribe((res) => {
      console.log('res', res)
      if (res.response_code === 200) {
        localStorage.setItem('token', res.data.access_token)
        this.routes.navigate(['/inventory'])
      }
    })
    // console.log(this.user?.value);

  }

  get company_code() {
    return this.loginForm.get('company_code');
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }



}
