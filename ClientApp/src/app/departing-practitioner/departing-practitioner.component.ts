import { Component, OnInit } from '@angular/core';
import { PractitionerRepositoryService } from '../core/practitioner-repository.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-departing-practitioner',
  templateUrl: './departing-practitioner.component.html',
  styleUrls: ['./departing-practitioner.component.css']
})
export class DepartingPractitionerComponent implements OnInit {

  departingPracForm: FormGroup;
  public listItems: Array<string> = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];
  public selectedValue: '2X-Large';
  // firstName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  errorMessage: any;
  constructor( private repository: PractitionerRepositoryService, private fBuilder: FormBuilder) { }

  // searchForPractitioner (): void {
  //   this.repository.searchForPractitioner (null, null, null)
  //     .subscribe(
  //       (pract: any) => this.onPractitionersFound(pract),
  //       (error: any) => this.errorMessage = <any>error
  //     );
  // }
  // onPractitionersFound(pract: any): any {
  //   throw new Error('Method not implemented.');
  // }

  ngOnInit() {
    this.departingPracForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl('')
    });
  }
}
