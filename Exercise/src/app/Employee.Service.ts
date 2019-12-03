import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private _url: string="/assets/data/Employee.json"
  constructor(private http:HttpClient) { }

  
  getEmployee() {
    return  this.http.get(this._url);
  }
}
