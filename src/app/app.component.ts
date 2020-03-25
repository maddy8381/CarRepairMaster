import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarRepairMaster';
  clientHeight: number;
  constructor() {
    this.clientHeight = window.innerHeight; 
 }
}
