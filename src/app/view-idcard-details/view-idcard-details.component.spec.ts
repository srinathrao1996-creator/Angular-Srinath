import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ViewIdcardDetailsComponent } from './view-idcard-details.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ViewIdcardDetailsComponent', () => {
  let component: ViewIdcardDetailsComponent;
  let fixture: ComponentFixture<ViewIdcardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewIdcardDetailsComponent ],
      imports: [HttpClientTestingModule],
       providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            // mock route parameters if needed
            paramMap: of({
              get: (key: string) => 'mocked-id', // or whatever your component expects
            }),
            snapshot: {
              paramMap: {
                get: () => 'mocked-id',
              },
            },
          },
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewIdcardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
