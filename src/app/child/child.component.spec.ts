import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildComponent } from './child.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from '../parent/parent.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComponent,ChildComponent ],
      imports:[FormsModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
