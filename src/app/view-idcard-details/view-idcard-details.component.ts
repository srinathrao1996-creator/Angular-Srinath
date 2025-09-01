import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdcardService } from '../idcard.service';

@Component({
  selector: 'app-view-idcard-details',
  templateUrl: './view-idcard-details.component.html',
  styleUrls: ['./view-idcard-details.component.css']
})
export class ViewIdcardDetailsComponent {

  id:number=0;
  idCard:any={}
  constructor(private _activatedRoute:ActivatedRoute, private _idService:IdcardService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data);
        this.id=data.id;
        console.log(this.id);

        _idService.viewIdcard(this.id).subscribe(
          (data:any)=>{
            console.log(data);
            this.idCard=data;
          },(err:any)=>{
            alert("Internal Server Error!")
          }
        )
      }
    )
  } 

}
