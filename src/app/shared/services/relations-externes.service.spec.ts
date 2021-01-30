import { TestBed } from '@angular/core/testing';

import { RelationsExternesService } from './relations-externes.service';

describe('RelationsExternesService', () => {
  let service: RelationsExternesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelationsExternesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
