import { Component } from '@angular/core';
import { AccountdetailsService } from '../accountdetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent {

   // For getting all details from API 
  accountDetails: any[]=[];
  private _accountdetailService: any;
  accounts: any;
  constructor(private _accountDetailsService : AccountdetailsService, private _router:Router){
    _accountDetailsService.getAccountdetails(). subscribe(
      (data: any) => {
        console.log(data); // For Checking in console
        this.accountDetails = data;
        console.log("Mail Data:", this.accountDetails);  // For Checking in console
      }, (err: any) => {
        alert("Internal Server Error")
      }
    )
  }

   // For getting filtered details from API

  searchKeyword:string='';
  search(){
    // alert(this.searchKeyword); // For Checking Purpose
    this._accountDetailsService.getfilteredAccountdetails(this.searchKeyword).subscribe(
      (data: any) => {
        console.log(data); // For Checking in console
        this.accountDetails = data;
      }, (err: any) => {
        alert("Internal Server Error")
      }
    )
  }

  // For getting sorted details from API

  coloumnName:string='';
  orderName:string='';
  sort(){
    // alert(this.coloumnName+this.orderName); // For Checking Purpose
    this._accountDetailsService.getSortedAccountdetails(this.coloumnName,this.orderName).subscribe(
       (data: any) => {
        console.log(data); // For Checking in console
        this.accountDetails = data;
      }, (err: any) => {
        alert("Internal Server Error")
      }
    )
  }

 // For getting pagination details from API

 items:number=0;
 pageNumber:number=0;
pagination(){
  // alert(this.items+this.pageNumber); // For Checking Purpose
  this._accountDetailsService.getPaginatedAccountdetails(this.items,this.pageNumber).subscribe(
    (data: any) => {
        console.log(data); // For Checking in console
        this.accountDetails = data;
      }, (err: any) => {
        alert("Internal Server Error")
      }
  )
}

// For delete any details in API
delete(id:any){
  this._accountDetailsService.deleteAccountdetails(id).subscribe(
     (data:any)=>{
        console.log(data); // For Checking in console
        this.accountDetails=data;
        console.log("Idcard Data :", this.accountDetails ); // For Checking in console
      }, (error:any)=>{
        alert("Internal Server Error")
      } 
  )
}

// For Create create account details form fetch in account details data

create(){
  this._router.navigateByUrl('/dashboard/create-account-details')
}

}