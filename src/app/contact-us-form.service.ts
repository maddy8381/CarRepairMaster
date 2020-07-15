import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ContactDetails } from './ContactDetails';

@Injectable({
  providedIn: 'root'
})
export class ContactUsFormService {

  baseUrl=environment.baseUrl;
  public Object: ContactDetails;

  constructor(private http:HttpClient) { }

  saveContactUsForm(contactDetails: ContactDetails){
    alert(contactDetails.email);alert(contactDetails.name);
    console.log(contactDetails);
    // return this.http.post(this.baseUrl+"/save_contact_us_form_details", contactDetails);
  return this.http.post<ContactDetails>(this.baseUrl+"/save_contact_us_form_details", contactDetails);
  }
}
