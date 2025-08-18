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
  ]},

  {path:'',component:DashboardComponent}, // Default
  {path:'**',component:ErrorComponent}, // Wildcard / Error

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
