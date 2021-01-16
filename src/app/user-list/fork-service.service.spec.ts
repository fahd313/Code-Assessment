import { TestBed } from '@angular/core/testing';

import { ForkServiceService } from './fork-service.service';

describe('ForkServiceService', () => {
  let service: ForkServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForkServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
