import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

 // For getting all details from API 

  constructor( private _httpClient:HttpClient) { }
getVehicles(){
  return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction')
}

 // For getting filtered details from API

getfilteredVehicles(term:any):Observable<any>{
  return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter='+term)
}

 // For getting sorted details from API

 getSortedVehicles(colounm:any,order:any):Observable<any>{
  return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy='+colounm+"&order="+order)
}

 // For getting pagination details from API

 getPaginatedVehicles(limit:any,page:any):Observable<any>{
  return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit='+limit+"&page="+page)
}

 // For delete any details from API

 deleteVehicles(id:any):Observable<any>{
  return this._httpClient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id)
}

 // For create any details from API

  createVehicles(data:any):Observable<any>{
  return this._httpClient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/',data)
}

}
