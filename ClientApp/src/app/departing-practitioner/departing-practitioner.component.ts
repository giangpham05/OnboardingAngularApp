import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departing-practitioner',
  templateUrl: './departing-practitioner.component.html',
  styleUrls: ['./departing-practitioner.component.css']
})
export class DepartingPractitionerComponent implements OnInit {

  public listItems: Array<string> = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];
  public selectedValue: '2X-Large';
  constructor() { }

  ngOnInit() {
  }
}
