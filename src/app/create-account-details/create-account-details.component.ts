import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountdetailsService } from '../accountdetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account-details',
  templateUrl: './create-account-details.component.html',
  styleUrls: ['./create-account-details.component.css']
})
export class CreateAccountDetailsComponent{
  public accountDetailsForm:FormGroup=new FormGroup({
    account_name:new FormControl(),
    available_balance:new FormControl(),
    account_number:new FormControl(),
    city:new FormControl(),
    profie_picture:new FormControl(),
    ifsc_code:new FormControl(),
    id:new FormControl(),
  });

constructor(private _accountService:AccountdetailsService, private _router:Router){}
submit(){
  console.log(this.accountDetailsForm.value);
  this._accountService.createAccountdetails(this.accountDetailsForm.value).subscribe((data:any)=>{
    alert("Details Added Successfull")
    this._router.navigateByUrl("/dashboard/accountdetails")
  },(err:any)=>{
    alert("Internal Server Error")
  })
}

}
