import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginFrom:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
  })

  constructor(private _loginService:LoginService,private _router:Router){}
  login(){
    console.log(this.loginFrom.value);
    this._loginService.login(this.loginFrom.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert(data.message);

        // Guard Process

        sessionStorage.setItem('token',data.token)
        
        this._router.navigateByUrl("/dashboard");
      },(err:any)=>{
        alert("Invalid Credential")
      }
    )
  }
}
