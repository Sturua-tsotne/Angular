import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
public name="Tsotne"

public hisError=true;
public highlightColor="orange";
public titleStyle={
  color:"blue",
  fontStyle:"italic"
}

  // გაკვეთილი9
  public greeting="";
  public NAme=" ";
  
  

  ngOnInit() {
  }


  onClick(){
console.log(event)
 this.greeting="ცოტნე";
 
}


// 12 შეგვიძლია ვმართოთ კომპონენტები *ngIf  #else ის გამოყენებით
disname=false;
// 13 ngSwitch 
public coloor ="red";
// 14 *ngFor 
public colors=["black", "blue", "yellow","orangered"];


}
