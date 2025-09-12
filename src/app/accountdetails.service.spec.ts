import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AccountdetailsService } from './accountdetails.service';

describe('AccountdetailsService', () => {
  let service: AccountdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // ✅ Add this
      providers: [AccountdetailsService]
    });
    service = TestBed.inject(AccountdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
