import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IdcardService } from '../idcard.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-idcard',
  templateUrl: './create-idcard.component.html',
  styleUrls: ['./create-idcard.component.css']
})
export class CreateIdcardComponent {
public createidCardForm:FormGroup=new FormGroup({
name:new FormControl(),
phone:new FormControl(),
city:new FormControl(),
dob:new FormControl(),
profile_picture:new FormControl(),
email:new FormControl(),
school_logo:new FormControl(),
school_name:new FormControl(),
school_city:new FormControl(),
school_pin:new FormControl(),
});

id:number=0;
constructor(private _idcardService:IdcardService,private _router:Router,private _activatedRoute:ActivatedRoute){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data);
      this.id=data.id;
      console.log(this.id);

      _idcardService.viewIdcard(this.id).subscribe(
        (data:any)=>{
          console.log(data);
          this.createidCardForm.patchValue(data);
        }
      )
    }
  )
}
submit(){
  if(this.id){
this._idcardService.updateIdcard(this.id,this.createidCardForm.value).subscribe(
  (data:any)=>{
      console.log(data);
      alert("Id Card Details Update Successfully");
      this._router.navigateByUrl("/dashboard/idcard");
  },(err:any)=>{
    alert("Internal Server Error");
  }
)
  }else{}
  console.log(this.createidCardForm.value);
  this._idcardService.createIdcard(this.createidCardForm.value).subscribe((data:any)=>{
    alert("Id Card Details Added Successfull")
    this._router.navigateByUrl("/dashboard/idcard")
  },(err:any)=>{
    alert("Internal Server Error");
  })
}
}
