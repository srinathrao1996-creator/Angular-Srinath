import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIdcardComponent } from './create-idcard.component';

describe('CreateIdcardComponent', () => {
  let component: CreateIdcardComponent;
  let fixture: ComponentFixture<CreateIdcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIdcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateIdcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
