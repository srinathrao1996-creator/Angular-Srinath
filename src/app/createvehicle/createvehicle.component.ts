import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {
public vehicleForm:FormGroup=new FormGroup({
  Vehicle:new FormControl(),
  manufacturer:new FormControl(),
  model:new FormControl(),
  type:new FormControl(),
  fuel:new FormControl(),
  color:new FormControl(),
  image:new FormControl(),
  cost:new FormControl(),
  tyres:new FormControl(),
});

constructor(private _vehicleServices:VehiclesService, private _router:Router){}
submit(){
  console.log(this.vehicleForm.value);
  this._vehicleServices.createVehicles(this.vehicleForm.value).subscribe((data:any)=>{
    alert("Vehice Added Successfull")
    this._router.navigateByUrl("/dashboard/vehicles")
  },(err:any)=>{
    alert("Internal Server Error")
  })
}

}
