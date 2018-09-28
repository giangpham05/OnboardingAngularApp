import { DepartingPractitionerModule } from './departing-practitioner.module';

describe('DepartingPractitionerModule', () => {
  let departingPractitionerModule: DepartingPractitionerModule;

  beforeEach(() => {
    departingPractitionerModule = new DepartingPractitionerModule();
  });

  it('should create an instance', () => {
    expect(departingPractitionerModule).toBeTruthy();
  });
});
