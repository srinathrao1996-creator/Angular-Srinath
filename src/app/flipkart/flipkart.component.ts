import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

   flipkart:any[]=[];
    constructor(private _mailService:FlipkartService){
      _mailService.getflipkart().subscribe(
        (data:any)=>{
          console.log(data); // For Checking in console
          this.flipkart=data;
          console.log("Flipkart Data :", this.flipkart);  // For Checking in console
        },(err:any)=>{
          alert("Internal Server Error")
        }
      )
    }
  

}
