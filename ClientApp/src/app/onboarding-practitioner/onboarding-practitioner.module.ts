import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Kendo UI components
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { NotificationModule } from '@progress/kendo-angular-notification';

import { SharedModule } from './../shared/shared.module';
import { OnboardingPractitionerComponent } from './onboarding-practitioner.component';
import { PractitionerRepositoryService } from '../core/practitioner-repository.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'onboarding', component: OnboardingPractitionerComponent, pathMatch: 'full' }
    ]),
      ReactiveFormsModule,
      SharedModule,
      DropDownsModule,
      BrowserAnimationsModule,
      ButtonsModule,
      DateInputsModule,
      DialogsModule,
      GridModule,
      InputsModule,
      NotificationModule
  ],
  declarations: [OnboardingPractitionerComponent],
  providers: [
    PractitionerRepositoryService
  ]
})
export class OnboardingPractitionerModule { }
