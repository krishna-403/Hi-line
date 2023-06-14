import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  header = { 'https://sis.hi-line.com/dev/api/api/'}

  constructor(private http: HttpClient) { }


  login() {
    return this.http.get('')
  }

}
