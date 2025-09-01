import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdcardService {
  constructor( private _httpClient:HttpClient) { }
  
  //  For getting all detials from API

  getidcard(){
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student')
  }

   // For getting filtered details from API

   getfilteredIdcard(term:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter='+term)
   }

   // For getting sorted details from API

   getsortedIdcard(colounm:any,order:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy='+colounm+"&order="+order)
   }

    // For getting pagination details from API

  getpaginatedIdcard(limit:any,page:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit='+limit+"&page="+page)
  }

  // For delete any details from API

  deleteIdcard(id:any):Observable<any>{
    return this._httpClient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id)
  }
  

  // For create any details from API

  createIdcard(data:any):Observable<any>{
    return this._httpClient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/student/',data)
  }

   // For view any details from API

  viewIdcard(id:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id)
  }

  // For edit any details from API

  updateIdcard(id:any,data:any):Observable<any>{
    return this._httpClient.put('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id,data)
  }

}