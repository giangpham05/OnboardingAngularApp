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
import { PractitionerComponent } from './practitioner.component';
import { PractitionerRepositoryService } from './practitioner-repository.service';

@NgModule({
    declarations: [PractitionerComponent],
    imports: [
      RouterModule.forChild([
        { path: '', component: PractitionerComponent, pathMatch: 'full' }
      ]),
      CommonModule,
      ReactiveFormsModule,
      DropDownsModule,
      BrowserAnimationsModule,
      ButtonsModule,
      DateInputsModule,
      DialogsModule,
      GridModule,
      InputsModule,
      SharedModule,
      NotificationModule
    ],
    providers: [PractitionerRepositoryService]
  })
export class PractitionerModule { }
