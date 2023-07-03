import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor(private http:HttpClient) { }

  table_data(){
    return this.http.get('http://localhost:3000/inventory_log')
  }
}
