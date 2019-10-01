import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sum=0;
  num
  numb
  add(){
    this.sum = +this.num + +this.numb;
  }
  sub(){
    this.sum =this.num -this.numb;
  }
  mul(){
    this.sum =this.num *this.numb;
  }
  div(){
    this.sum =this.num /this.numb;
  }
}
