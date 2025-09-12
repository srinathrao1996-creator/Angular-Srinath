import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PinterestService } from './pinterest.service';

describe('PinterestService', () => {
  let service: PinterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PinterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
