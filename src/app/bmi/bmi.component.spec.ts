import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiComponent } from './bmi.component';
import { FormsModule } from '@angular/forms';

describe('BmiComponent', () => {
  let component: BmiComponent;
  let fixture: ComponentFixture<BmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiComponent ],
      imports:[FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
