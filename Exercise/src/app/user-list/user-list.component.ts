import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../Employee.Service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html', 
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  jeson(_UserListComponent: any){

  }
  public uesrs=[];
  constructor( private _employeeService: EmployeService){}

  ngOnInit() {
    this._employeeService.getEmployee()
                        .subscribe(data =>this.uesrs= data);
  }
                        

}
