import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetSampleStringService {
  
  
  baseUrl = 'http://localhost:8080/';
  
  constructor(private http : HttpClient) { }

  getResult()
  {

    return this.http.get(this.baseUrl+'/contact-us');
  }

}
