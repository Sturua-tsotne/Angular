import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
})
export class TestComponent implements OnInit {
  public name="Tsotne";
  public message="welcome to tsotne";
  public={
    "firstname":"Tsotne",
    "lastname":"sturua"
  }

public date= new Date();

   ngOnInit() {
  }






}
