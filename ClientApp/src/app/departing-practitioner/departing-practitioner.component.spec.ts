import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartingPractitionerComponent } from './departing-practitioner.component';

describe('DepartingPractitionerComponent', () => {
  let component: DepartingPractitionerComponent;
  let fixture: ComponentFixture<DepartingPractitionerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartingPractitionerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartingPractitionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
