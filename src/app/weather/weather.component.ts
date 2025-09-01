import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weathers:any={};
constructor(private _weatherService: WeatherService)
{
  _weatherService.getWeather().subscribe(
     (data:any) => {
        console.log(data); // For Checking in console
        this.weathers = data;
      }, (err: any) =>
        alert("Internal Server Error")
  )
}

}
