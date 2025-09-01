import { Component } from '@angular/core';
import { CommonSiblingService } from '../common-sibling.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent {
count:number=0;
constructor(private _commonsiblingService:CommonSiblingService){}
send(){
  // alert(this.count)
  this._commonsiblingService.countSubject.next(this.count);
}
}
