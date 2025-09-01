import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // constructor(private _router:Router)
  // logout(){
  //   if (confirm('Are you sure to logout')==true) {
  //     sessionStorage.removeItem('token');
  //     alert("Logout Successfully");
  //     this._router.navigateByUrl(' /')
  //   } else {
  //     alert("Internal Server Issue")
  //   }
  // }

}
