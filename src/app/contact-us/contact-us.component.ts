import { Component, OnInit } from '@angular/core';
import { SampleClass } from 'src/SampleClass';
import { GetSampleStringService } from '../get-sample-string.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  public stringData;
  public error;
  public temp = "fdsfds";

  constructor(private getSampleStringService : GetSampleStringService) { }

  ngOnInit() {
    this.getSampleStringService.getResult().subscribe((data: any) => {
      this.stringData = data;
    });
    
  }

}
