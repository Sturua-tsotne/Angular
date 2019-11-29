import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

public hisError=true;
public highlightColor="orange";
public titleStyle={
  color:"blue",
  fontStyle:"italic"
}
  ngOnInit() {
  }

}
