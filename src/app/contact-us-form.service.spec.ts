import { TestBed } from '@angular/core/testing';

import { ContactUsFormService } from './contact-us-form.service';

describe('ContactUsFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactUsFormService = TestBed.get(ContactUsFormService);
    expect(service).toBeTruthy();
  });
});
