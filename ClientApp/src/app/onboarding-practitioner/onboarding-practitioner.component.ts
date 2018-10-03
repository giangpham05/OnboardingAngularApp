import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../shared/share-service';

@Component({
  selector: 'app-onboarding-practitioner',
  templateUrl: './onboarding-practitioner.component.html',
  styleUrls: ['./onboarding-practitioner.component.css']
})
export class OnboardingPractitionerComponent implements OnInit {

  onboaridngPractForm: FormGroup;
  constructor (private fBuilder: FormBuilder, private _sharedService: SharedService) {}
  ngOnInit(): void {
    this._sharedService.emitChange('New Practitioner Information');

    this.onboaridngPractForm = this.fBuilder.group({
      submissionDate: ['', [Validators.required]],
      contractType: ['', [Validators.required]]
    });
  }
  onFormSubmit(): void {
  }

}
