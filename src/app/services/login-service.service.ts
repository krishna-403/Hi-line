import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {
  showDialog = false;
  api: any

  constructor(private http: HttpClient) {
    this.api = environment.loginApi
  }


  login(obj: any): Observable<any> {
    console.log(obj);
    const headers = {
      'rest-api-key': '4d717e90-7323-423c-b198-47eabe4975a5'
    }
    return this.http.post(`${environment.loginApi}user/login`, obj, {
      headers
    })
  }
}
