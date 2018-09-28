import { NgModule } from '@angular/core';

import { UserInterfaceImportModule } from './../user-interface-imports/user-interface-import.module';
import { PractitionerRepositoryService } from '../core/practitioner-repository.service';
import { SharedModule } from './../shared/shared.module';
import { DepartingPractitionerComponent } from './departing-practitioner.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: DepartingPractitionerComponent, pathMatch: 'full' }
    ]),
    UserInterfaceImportModule,
    SharedModule
  ],
  declarations: [DepartingPractitionerComponent],
  providers: [
    PractitionerRepositoryService
  ]
})
export class DepartingPractitionerModule { }
