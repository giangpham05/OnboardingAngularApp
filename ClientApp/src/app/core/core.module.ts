import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { PractitionerRepositoryService } from './practitioner-repository.service';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [AuthService, PractitionerRepositoryService]
  })
export class CoreModule { }
