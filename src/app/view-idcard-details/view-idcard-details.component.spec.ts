import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIdcardDetailsComponent } from './view-idcard-details.component';

describe('ViewIdcardDetailsComponent', () => {
  let component: ViewIdcardDetailsComponent;
  let fixture: ComponentFixture<ViewIdcardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewIdcardDetailsComponent ]
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
