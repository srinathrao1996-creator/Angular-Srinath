import { Component } from '@angular/core';
import { IdcardService } from '../idcard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idcard',
  templateUrl: './idcard.component.html',
  styleUrls: ['./idcard.component.css']
})
export class IdcardComponent {

//  To get all detials from API - For Array Data [] , Object Data - ()

  idcard: any[] = [];     
  constructor(private _idcardService: IdcardService, private _router:Router) 
  {
    _idcardService.getidcard().subscribe(
      (data: any) => {
        console.log(data); // For Checking in console
        this.idcard = data;
        console.log("Mail Data:", this.idcard);  // For Checking in console
      }, (err: any) => {
        alert("Internal Server Error")
      }
    )
  }

  //  To get all filtere detials from API

  searchKeyword:String='';
  search(){
    // alert(this.searchKeyword); // For Checking Purpose
    this._idcardService.getfilteredIdcard(this.searchKeyword).subscribe(
      (data:any)=>{
        console.log(data); // For Checking in console
        this.idcard=data;
        console.log("Idcard Data :", this.idcard ); // For Checking in console
      }, (error:any)=>{
        alert("Internal Server Error")
      }
    )
  }

//  To get all sorted detials from API

coloumnName:string='';
sortOrder:string='';

sort(){
  // alert(this.coloumnName+this.sortOrder); // For Checking Purpose
  this._idcardService.getsortedIdcard(this.coloumnName,this.sortOrder).subscribe(
   (data:any)=>{
        console.log(data); // For Checking in console
        this.idcard=data;
        console.log("Idcard Data :", this.idcard ); // For Checking in console
      }, (error:any)=>{
        alert("Internal Server Error")
      } 
  )
}

// For getting pagination details from API

totalCard:number=0;
totalpage:number=0;
pagination(){
  this._idcardService.getpaginatedIdcard(this.totalCard,this.totalpage).subscribe(
    (data:any)=>{
        console.log(data); // For Checking in console
        this.idcard=data;
        console.log("Idcard Data :", this.idcard ); // For Checking in console
      }, (error:any)=>{
        alert("Internal Server Error")
      } 
  )
}

// For load page after doind any API methods any details from API

delete(id:any){
  this._idcardService.deleteIdcard(id).subscribe(
     (data:any)=>{
        console.log(data); // For Checking in console
        this.idcard=data;
        console.log("Idcard Data :", this.idcard ); // For Checking in console
      }, (error:any)=>{
        alert("Internal Server Error")
      } 
  )
}

// For Create Idcard form fetch in Idcard Data

create(){
  this._router.navigateByUrl('/dashboard/create-idcard')
}
}
