import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

    num1:number=0;
  num2:number=0;
  result:number=0;


  addition(){
    this.result=this.num1+this.num2;
  }

    subtraction(){
    this.result=this.num1-this.num2;
  }

    multiplication(){
    this.result=this.num1*this.num2;
  }

    division(){
    this.result=this.num1/this.num2;
  }

}
