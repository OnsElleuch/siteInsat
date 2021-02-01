import { TestBed } from '@angular/core/testing';

import { ClubTemplateService } from './club-template.service';

describe('ClubTemplateService', () => {
  let service: ClubTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClubTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
