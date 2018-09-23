import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-practitioner',
  templateUrl: './practitioner.component.html',
  styleUrls: ['./practitioner.component.css']
})
export class PractitionerComponent implements OnInit {
  public min: Date = new Date(2000, 2, 10);
  public max: Date = new Date(2020, 2, 10);
  public value: Date = new Date();
  practitionerForm: FormGroup;
  constructor (private fBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.practitionerForm = this.fBuilder.group({
      submissionDate: ['', [Validators.required]],
      contractType: ['', [Validators.required]]
    });
  }
  onFormSubmit(): void {
  }
}
