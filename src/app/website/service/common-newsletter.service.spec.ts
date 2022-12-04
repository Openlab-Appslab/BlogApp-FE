import { TestBed } from '@angular/core/testing';

import { CommonNewsletterService } from './common-newsletter.service';

describe('CommonNewsletterService', () => {
  let service: CommonNewsletterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonNewsletterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
