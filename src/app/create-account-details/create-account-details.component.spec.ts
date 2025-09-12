import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountDetailsComponent } from './create-account-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AccountdetailsService } from '../accountdetails.service';

describe('CreateAccountDetailsComponent', () => {
  let component: CreateAccountDetailsComponent;
  let fixture: ComponentFixture<CreateAccountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccountDetailsComponent ],
      imports: [HttpClientTestingModule], // ✅ Required to inject HttpClient
      providers: [AccountdetailsService]  // Optional if providedIn: 'root'
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
