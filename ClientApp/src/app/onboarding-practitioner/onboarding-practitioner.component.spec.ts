import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingPractitionerComponent } from './onboarding-practitioner.component';

describe('OnboardingPractitionerComponent', () => {
  let component: OnboardingPractitionerComponent;
  let fixture: ComponentFixture<OnboardingPractitionerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingPractitionerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingPractitionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
