import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PractitionerRepositoryService } from '../core/practitioner-repository.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { SharedService } from '../shared/share-service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-departing-practitioner',
  templateUrl: './departing-practitioner.component.html',
  styleUrls: ['./departing-practitioner.component.css']
})
export class DepartingPractitionerComponent implements OnInit {

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

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
  public min: Date = new Date(1917, 0, 1);
  public max: Date = new Date(2050, 12, 31);
  public selectedValue: '2X-Large';
  public selectedReason: string = this.departureReasons[0];
  errorMessage: any;

  constructor(
    private repository: PractitionerRepositoryService,
    private fBuilder: FormBuilder,
    private _sharedService: SharedService) { }

  ngOnInit() {
    this._sharedService.emitChange('Departing Practitioner Information');
    this.searchForm = this.fBuilder.group({
      FirstName: '',
      LastName: '',
      Email: ''
    });
    this.departingPracForm = this.fBuilder.group({
      ReEngage: '',
      CommencementDate: new DatePipe('en-AU').transform(Date.now(), 'dd-MMM-yyyy'),
      NoticeDate: new Date(),
      DepatureDate: '',
      Description: '',
      DepatureReason: this.selectedReason
    });
  }

  // Search for practitioner(s)
  searchForPractitioner(): void {
    // this.repository.searchForPractitioner (null, null, null)
    //   .subscribe(
    //     (pract: any) => this.onPractitionersFound(pract),
    //     (error: any) => this.errorMessage = <any>error
    //   );

  }
  onPractitionersFound(pract: any): any {
    throw new Error('Method not implemented.');
  }

  // Controls events
  onPractitionerValueChange(value: any) {
    console.log('valueChange', value);
  }

  // Submit form to the api
  onSubmitDepartingPract(value): void {
    console.log('Form submitted', value);
  }
}
