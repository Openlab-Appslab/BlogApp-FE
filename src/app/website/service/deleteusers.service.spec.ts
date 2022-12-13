import { TestBed } from '@angular/core/testing';

import { DeleteusersService } from './deleteusers.service';

describe('DeleteusersService', () => {
  let service: DeleteusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
