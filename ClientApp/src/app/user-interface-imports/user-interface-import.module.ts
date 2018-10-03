import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Kendo UI components
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { RippleModule } from '@progress/kendo-angular-ripple';
import { UploadModule } from '@progress/kendo-angular-upload';
// Angular
import { MatCardModule, MatDividerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatCardModule,
    MatDividerModule,

    DropDownsModule,
    ButtonsModule,
    DateInputsModule,
    DialogsModule,
    GridModule,
    InputsModule,
    NotificationModule,
    RippleModule,
    UploadModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatCardModule,
    MatDividerModule,

    DropDownsModule,
    ButtonsModule,
    DateInputsModule,
    DialogsModule,
    GridModule,
    InputsModule,
    NotificationModule,
    RippleModule,
    UploadModule
  ],
  declarations: []
})
export class UserInterfaceImportModule { }
