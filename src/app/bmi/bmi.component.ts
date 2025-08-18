import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {

  height:number=0;
  weight:number=0;
  result:string='';

    calculatorbmi(){
    const heightInMeters = this.height/100;
    const bmi = this.weight/(heightInMeters * heightInMeters);
    this.result = `Your BMI is ${bmi.toFixed(2)}`;
  }

}
