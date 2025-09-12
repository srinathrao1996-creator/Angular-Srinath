import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅ Import this
import { AccountdetailsComponent } from './accountdetails.component';
import { AccountdetailsService } from '../accountdetails.service';

describe('AccountdetailsComponent', () => {
  let component: AccountdetailsComponent;
  let fixture: ComponentFixture<AccountdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountdetailsComponent ],
      imports: [HttpClientTestingModule], // ✅ Add this
      providers: [AccountdetailsService]  // Optional if provided in root
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
