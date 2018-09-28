import { TestBed } from '@angular/core/testing';

import { PractitionerRepositoryService } from './practitioner-repository.service';

describe('PractitionerRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PractitionerRepositoryService = TestBed.get(PractitionerRepositoryService);
    expect(service).toBeTruthy();
  });
});
