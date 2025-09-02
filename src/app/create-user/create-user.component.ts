import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { appleMail } from '../about-us/validators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
public userform:FormGroup=new FormGroup({
// Form Validator
  name:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
  email:new FormControl('',[Validators.required,appleMail]),
  password:new FormControl('',[Validators.required]),
  mobile:new FormControl('',[Validators.required]),
  address:new FormGroup({
  city:new FormControl('',[Validators.required]),
  state:new FormControl('',[Validators.required]),
  pincode:new FormControl('',[Validators.required]),
  }),

  // Dynamic Form
  
  type:new FormControl([Validators.required]),
  // busFee:new FormControl(), --- To display in static
  // hostelFee:new FormControl(), --- To display in static
  cards:new FormArray([])
})

constructor(){
  this.userform.get('type')?.valueChanges.subscribe(
    (data:any)=>{
      if(data=='residential'){
        this.userform.addControl('hostelFee',new FormControl);
        this.userform.removeControl('busFee');
      }else{
       this.userform.addControl('busFee',new FormControl);
        this.userform.removeControl('hostelFee'); 
      }
    }
  )
}

submit(){
  console.log(this.userform.value)
}

  // Form of Array

  get cardsFormArray(){
    return this.userform.get('cards') as FormArray;
  }
  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
        cardNumber:new FormControl(),
        expiry:new FormControl(),
        cvv:new FormControl(),
      })
    )
  }

  delete(index:any){
    this.cardsFormArray.removeAt(index);
  }

}
