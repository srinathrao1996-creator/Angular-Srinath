import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  // For getting all details from API 

  vehicles:any[]=[];
  constructor(private _vehicleServices:VehiclesService){
    this.loadVehicles();
  }

  loadVehicles(){
    this._vehicleServices.getVehicles().subscribe(
      (data:any)=>{
        console.log(data); // For Checking in console
        this.vehicles=data;
        console.log("Vehicles Data :", this.vehicles);  // For Checking in console
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

  // For getting filtered details from API

  searchKeyword:string='';
  search(){
    // alert(this.searchKeyword); // For Checking Purpose
    this._vehicleServices.getfilteredVehicles(this.searchKeyword).subscribe(
      (data:any)=>{
        console.log(data); // For Checking in console
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

    // For getting sorted details from API

    coloumnName:string='';
    sortOrder:string='';
  sort(){
    // alert(this.coloumnName+this.sortOrder); // For Checking Purpose
    this._vehicleServices.getSortedVehicles(this.coloumnName,this.sortOrder).subscribe(
      (data:any)=>{
        console.log(data); // For Checking in console
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

   // For getting pagination details from API

   items:number=0;
    pageNumber:number=0;
  pagination(){
    // alert(this.items+this.pageNumber); // For Checking Purpose
    this._vehicleServices.getPaginatedVehicles(this.items,this.pageNumber).subscribe(
      (data:any)=>{
        console.log(data); // For Checking in console
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

  
  // For getting filtered details from API

  delete(id:any){
  if(confirm("Are you sure to delete?")==true){
  this._vehicleServices.deleteVehicles(id).subscribe((data:any)=>{
    alert("Record deleted successfully");
  },(err:any)=>{
    alert("Internal Server Error!")
  }
)
this.loadVehicles();
  }else{
    alert('you have cancelled the delete')
  }
}
}


