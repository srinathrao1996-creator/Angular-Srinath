import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountdetailsService{
  constructor( private _httpClient:HttpClient) { }

  //  For getting all detials from API

  getAccountdetails(){
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals')
  }

  // For getting filtered details from API

  getfilteredAccountdetails(term:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter='+term)
  }

   // For getting sorted details from API

 getSortedAccountdetails(colounm:any,order:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy='+colounm+"&order="+order)
  }

   // For getting pagination details from API
 getPaginatedAccountdetails(limit:any,page:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit='+limit+"&page="+page)
  }

   // For delete any details from API
 deleteAccountdetails(id:any):Observable<any>{
    return this._httpClient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/'+id)
  }

   // For create any details from API
   createAccountdetails(data:any):Observable<any>{
    return this._httpClient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/',data)
  }

}
