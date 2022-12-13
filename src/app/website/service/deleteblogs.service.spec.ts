import { TestBed } from '@angular/core/testing';

import { DeleteblogsService } from './deleteblogs.service';

describe('DeleteblogsService', () => {
  let service: DeleteblogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteblogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
