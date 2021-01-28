import { TestBed } from '@angular/core/testing';

import { NouveautesService } from './nouveautes.service';

describe('NouveautesService', () => {
  let service: NouveautesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NouveautesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
