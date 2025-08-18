import { Component } from '@angular/core';

@Component({
  selector: 'app-datainding',
  templateUrl: './datainding.component.html',
  styleUrls: ['./datainding.component.css']
})
export class DataindingComponent {
    radius: number = 0;
  areaResult: string = '';
  perimeterResult: string = '';

  calculate() {
    if (this.radius <= 0) {
      this.areaResult = 'Please enter a valid radius.';
      this.perimeterResult = '';
      return;
    }

    const area = Math.PI * this.radius * this.radius;
    const perimeter = 2 * Math.PI * this.radius;

    this.areaResult = `${area.toFixed(2)}`;
    this.perimeterResult = `${perimeter.toFixed(2)}`;
  }


}
