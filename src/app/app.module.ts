import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MywebsiteComponent } from './mywebsite/mywebsite.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataindingComponent } from './datainding/datainding.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HttpClientModule } from '@angular/common/http';
import { MailComponent } from './mail/mail.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { WeatherComponent } from './weather/weather.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    DashboardComponent,
    HomeComponent,
    GalleryComponent,
    MywebsiteComponent,
    WelcomeComponent,
    DataindingComponent,
    DatabindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    DirectivesComponent,
    EmployeeComponent,
    ProductComponent,
    VehiclesComponent,
    MailComponent,
    FlipkartComponent,
    PinterestComponent,
    WeatherComponent,
    CreatevehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
