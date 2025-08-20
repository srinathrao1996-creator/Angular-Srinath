import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles:any[]=[];
  constructor(private _vehicleServices:VehiclesService){
    _vehicleServices.getVehicles().subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
        console.log("Vehicles Data :", this.vehicles);
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

}
