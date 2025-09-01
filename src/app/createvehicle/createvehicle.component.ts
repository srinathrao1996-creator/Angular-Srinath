import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute, Router } from '@angular/router';

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

// For Edit Process
id:number=0;
constructor(private _vehicleServices:VehiclesService, private _router:Router,private _activatedRoute:ActivatedRoute){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data);
      this.id=data.id;
      console.log(this.id);

      _vehicleServices.getUniqueVehicle(this.id).subscribe(
        (data:any)=>{
      console.log(data);
      this.vehicleForm.patchValue(data);
        } 
      )
    }
  )
}

// For Create Process

submit()
// For Edit Process
{
  if (this.id) {
    this._vehicleServices.updateVehicles(this.id,this.vehicleForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("Vehicle Update Successfully");
        this._router.navigateByUrl("/dashboard/vehicles")
  },(err:any)=>{
    alert("Internal Server Error")
      }
    )
    
  
  }
  // For Create Process
  else {  
  }
  console.log(this.vehicleForm.value);
  this._vehicleServices.createVehicles(this.vehicleForm.value).subscribe((data:any)=>{
    alert("Vehice Added Successfull")
    this._router.navigateByUrl("/dashboard/vehicles")
  },(err:any)=>{
    alert("Internal Server Error")
  })
}

}
