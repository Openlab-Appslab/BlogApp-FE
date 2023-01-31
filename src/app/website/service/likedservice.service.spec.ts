import { TestBed } from '@angular/core/testing';

import { LikedserviceService } from './likedservice.service';

describe('LikedserviceService', () => {
  let service: LikedserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikedserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
