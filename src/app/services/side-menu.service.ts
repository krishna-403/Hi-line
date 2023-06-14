import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  constructor(private http:HttpClient) { }

  side_menu_icon(){
   return this.http.get('assets/Json/icon.json')
  
  }
}
