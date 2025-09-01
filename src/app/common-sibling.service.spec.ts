import { TestBed } from '@angular/core/testing';

import { CommonSiblingService } from './common-sibling.service';

describe('CommonSiblingService', () => {
  let service: CommonSiblingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonSiblingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
