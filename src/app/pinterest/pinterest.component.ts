import { Component } from '@angular/core';
import { PinterestService } from '../pinterest.service';

@Component({
  selector: 'app-pinterest',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.css']
})
export class PinterestComponent {
pinterest:any[]=[];
constructor(private _pinterestService:PinterestService){
  _pinterestService.getpinterest() .subscribe(
      (data:any)=>{
        console.log(data); // For Checking in console
        this.pinterest=data;
        console.log("Mail Data :", this.pinterest);  // For Checking in console
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  
}

}
