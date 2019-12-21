import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

let input = document.getElementById('input');

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html', 
})

export class RegistrationComponent implements OnInit {

  constructor() { }
 
  public vals=
  ["სახელი", "გვარი", "ასაკი","ელ.ფოსტა" ];
 
  ngOnInit() {
  }
  textValue: string = '';
  public color="";

textAreaEmpty(){
  if (this.textValue != '') {
    console.log(this.textValue);
  }
}


onClickBtn(){
    if(this.textValue == ''){
     this.color="red"
      console.log(this.textValue);

    }
    else{
      this.color="green"
    }
  }
}