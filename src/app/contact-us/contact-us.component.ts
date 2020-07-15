import { Component, OnInit } from '@angular/core';
import { GetSampleStringService } from '../get-sample-string.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ContactUsFormService } from '../contact-us-form.service';
import { ContactDetails } from '../ContactDetails';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  public stringData : any;
  private contactUsObj:ContactDetails;

  constructor(private getSampleStringService : GetSampleStringService, private saveContactUsDataService: ContactUsFormService) { }

  ngOnInit() {
    this.getSampleStringService.getResult().subscribe((data: any) => {
      this.stringData = data;
    });    
  }

  onClickSubmit(data){
    alert(data.email);
    this.contactUsObj = {
      name : data.name,
      email : data.email,
      query : data.problems
    };
    
    alert(this.contactUsObj.query +"sds");
    this.saveContactUsDataService.saveContactUsForm(this.contactUsObj).subscribe(
      response => console.log(response), // success
      error => console.log(error),       // error
      () => console.log('completed') 
     );
  }
}
