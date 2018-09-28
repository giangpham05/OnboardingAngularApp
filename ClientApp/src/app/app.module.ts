import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Angular Material Design
import {MatMenuModule, MatIconModule, MatCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { PageNotFoundComponent } from './404/pagenotfound.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UserInterfaceImportModule } from './user-interface-imports/user-interface-import.module';

import { DepartingPractitionerModule } from './departing-practitioner/departing-practitioner.module';
import { OnboardingPractitionerModule } from './onboarding-practitioner/onboarding-practitioner.module';

@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '**', component: PageNotFoundComponent}
    ]),
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    CoreModule,
    SharedModule,
    UserInterfaceImportModule,
    DepartingPractitionerModule,
    OnboardingPractitionerModule,
  ],
  exports: [
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
