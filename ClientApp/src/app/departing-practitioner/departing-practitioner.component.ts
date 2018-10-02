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
  searchForm: FormGroup;
  public listItems: Array<string> = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];
  public departureReasons: Array<string> = [
    'PSG Notified - Clinical',
    'PSG Notified - Contract term expired',
    'PSG Notified - Inappropriate cultural fit',
    'PSG Notified - Patient demand',
    'PSG Notified - Opening own practice',
    'Practitioner Notified – Relocation',
    'Practitioner Notified - Patient demand',
    'Practitioner Notified - Other'
  ];
  public selectedValue: '2X-Large';
  public selectedReason: string = this.departureReasons[0];
  // firstName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  errorMessage: any;
  constructor( private repository: PractitionerRepositoryService, private fBuilder: FormBuilder) { }

  searchForPractitioner (): void {
    // this.repository.searchForPractitioner (null, null, null)
    //   .subscribe(
    //     (pract: any) => this.onPractitionersFound(pract),
    //     (error: any) => this.errorMessage = <any>error
    //   );

  }
  onPractitionersFound(pract: any): any {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.departingPracForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl('')
    });

    this.searchForm = this.fBuilder.group({
      FirstName: '',
  LastName: '',
  Email: ''
    });
  }
}
