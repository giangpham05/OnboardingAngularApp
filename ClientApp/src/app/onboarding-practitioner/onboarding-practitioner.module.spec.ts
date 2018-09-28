import { OnboardingPractitionerModule } from './onboarding-practitioner.module';

describe('OnboardingPractitionerModule', () => {
  let onboardingPractitionerModule: OnboardingPractitionerModule;

  beforeEach(() => {
    onboardingPractitionerModule = new OnboardingPractitionerModule();
  });

  it('should create an instance', () => {
    expect(onboardingPractitionerModule).toBeTruthy();
  });
});
