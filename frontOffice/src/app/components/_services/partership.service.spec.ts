import { TestBed } from '@angular/core/testing';

import { PartershipService } from './partership.service';

describe('PartershipService', () => {
  let service: PartershipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartershipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
