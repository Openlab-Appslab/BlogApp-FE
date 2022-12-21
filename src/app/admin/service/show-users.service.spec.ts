import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { ShowUsersService } from './show-users.service';

describe('ShowUsersService', () => {
  let service: ShowUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler, Router]
    });
    service = TestBed.inject(ShowUsersService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
