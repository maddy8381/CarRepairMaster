import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetSampleStringService {
  
  
  baseUrl = environment.baseUrl;
  
  constructor(private http : HttpClient) { }

  getResult()
  {

    return this.http.get(this.baseUrl+'/contact-us');
  }

}
