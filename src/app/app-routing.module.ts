import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { MailComponent } from './mail/mail.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { WeatherComponent } from './weather/weather.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';

const routes: Routes = [
  {path:'login',component:LoginComponent}, // Parent
  {path:'dashboard',component:DashboardComponent,children:[
   {path:'home',component:HomeComponent},
   {path:'welcome',component:WelcomeComponent},
   {path:'databinding',component:DatabindingComponent},
   {path:'calculator',component:CalculatorComponent},
   {path:'rectangle',component:RectangleComponent},
   {path:'circle',component:CircleComponent},
   {path:'bmi',component:BmiComponent},
   {path:'directives',component:DirectivesComponent},
   {path:'employee',component:EmployeeComponent},
   {path:'product',component:ProductComponent},
   {path:'vehicles',component:VehiclesComponent},
   {path:'mail',component:MailComponent},
   {path:'flipkart',component:FlipkartComponent},
   {path:'pinterest',component:PinterestComponent},
   {path:'weather',component:WeatherComponent},
   {path:'createvehicle',component:CreatevehicleComponent},
  ]},

  {path:'',component:DashboardComponent}, // Default
  {path:'**',component:ErrorComponent}, // Wildcard / Error

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
