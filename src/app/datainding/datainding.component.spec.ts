import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataindingComponent } from './datainding.component';

describe('DataindingComponent', () => {
  let component: DataindingComponent;
  let fixture: ComponentFixture<DataindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
