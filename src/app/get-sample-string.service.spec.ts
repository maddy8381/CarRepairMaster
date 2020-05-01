import { TestBed } from '@angular/core/testing';

import { GetSampleStringService } from './get-sample-string.service';

describe('GetSampleStringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSampleStringService = TestBed.get(GetSampleStringService);
    expect(service).toBeTruthy();
  });
});
