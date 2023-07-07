import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor(private http: HttpClient) { }

  inventory_table() {
    return this.http.get('http://localhost:3000/inventory_log')
  }

  add_inventory_table(data: any) {
    return this.http.post('http://localhost:3000/inventory_log', data)
  }

  delete(id: any) {
    return this.http.delete(`http://localhost:3000/inventory_log/${id}`)
  }

  getDescription(id: any) {
    return this.http.get(`http://localhost:3000/inventory_log/${id}`)
  }
  updateDescription(data: any) {
    return this.http.put(`http://localhost:3000/inventory_log/${data.id}`, data)
  }

  delete_user_management(id: any) {
    return this.http.delete(`http://localhost:3000/user_management/${id}`)
  }


  user_management_table() {
    return this.http.get('http://localhost:3000/user_management')
  }

  area_management_table() {
    return this.http.get('http://localhost:3000/area_management')
  }

  part_management_table() {
    return this.http.get('http://localhost:3000/part_management')
  }
}
