import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FlipkartService } from './flipkart.service';

describe('FlipkartService', () => {
  let service: FlipkartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FlipkartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
