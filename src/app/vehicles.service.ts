import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService{

 //Optimization process for common thing in API - ( URL)
 
 apiUrl:string='https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction';

 // For getting all details from API 

  constructor( private _httpClient:HttpClient) { }
getVehicles(){
  return this._httpClient.get(this.apiUrl)
}

// For getting individual details from API 

getUniqueVehicle(id:any){
  return this._httpClient.get(this.apiUrl+'/'+id)
}

 // For getting filtered details from API

getfilteredVehicles(term:any):Observable<any>{
  return this._httpClient.get(this.apiUrl+'?filter='+term)
}

 // For getting sorted details from API

 getSortedVehicles(colounm:any,order:any):Observable<any>{
  return this._httpClient.get(this.apiUrl+'?sortBy='+colounm+"&order="+order)
}

 // For getting pagination details from API

 getPaginatedVehicles(limit:any,page:any):Observable<any>{
  return this._httpClient.get(this.apiUrl+'?limit='+limit+"&page="+page)
}

 // For delete any details from API

 deleteVehicles(id:any):Observable<any>{
  return this._httpClient.delete(this.apiUrl+'/'+id)
}

 // For create any details from API

  createVehicles(data:any):Observable<any>{
  return this._httpClient.post(this.apiUrl+'/',data)
}

updateVehicles(id:any,data:any):Observable<any>{
  return this._httpClient.put(this.apiUrl+'/',+id,data)
}


}
