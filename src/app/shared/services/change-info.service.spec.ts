import { TestBed } from '@angular/core/testing';

import { ChangeInfoService } from './change-info.service';

describe('ChangeInfoService', () => {
  let service: ChangeInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
