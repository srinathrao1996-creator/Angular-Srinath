import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DatabindingComponent } from './databinding.component';
import { By } from '@angular/platform-browser';

describe('DatabindingComponent', () => {
  let component: DatabindingComponent;
  let fixture: ComponentFixture<DatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabindingComponent ],
      imports:[FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    describe('Calculator functionality', () => {
    beforeEach(() => {
      component.num1 = 5;
      component.num2 = 2;
    });

    it('should add numbers correctly', () => {
      component.addition();
      expect(component.result).toBe(7);
    });

    it('should subtract numbers correctly', () => {
      component.subtraction();
      expect(component.result).toBe(3);
    });

    it('should multiply numbers correctly', () => {
      component.multiplication();
      expect(component.result).toBe(10);
    });

    it('should divide numbers correctly', () => {
      component.division();
      expect(component.result).toBe(2.5);
    });

    it('division by zero should result in Infinity or error', () => {
      component.num2 = 0;
      component.division();
      expect(component.result).toBe(component.num1 / 0); // you may adjust expectation based on your error logic
    });
  });

  describe('Template bindings & interactions', () => {
    it('should reflect name and age via interpolation', () => {
      component.name = 'Alice';
      component.age = 30;
      fixture.detectChanges();

      const nameEl = fixture.debugElement.query(By.css('h2')).nativeElement;
      const ageEl = fixture.debugElement.query(By.css('h3')).nativeElement;

      expect(nameEl.textContent).toContain('Alice');
      expect(ageEl.textContent).toContain('30');
    });

    it('should bind disabled property of reset button based on isDataPresent', () => {
      component.isDataPresent = false;
      fixture.detectChanges();
      const button = fixture.debugElement.query(By.css('button[disabled]'));
      expect(button).toBeTruthy();

      component.isDataPresent = true;
      fixture.detectChanges();
      const enabledButton = fixture.debugElement.query(By.css('button:not([disabled])'));
      expect(enabledButton).toBeTruthy();
    });

    it('should update mobile via two-way binding and trigger enternumber()', () => {
      spyOn(component, 'enternumber');
      const input = fixture.debugElement.query(By.css('input[ngModel]')).nativeElement;

      input.value = '+91123456';
      input.dispatchEvent(new Event('input'));  // two-way binding via ngModel
      input.dispatchEvent(new KeyboardEvent('keyup'));
      fixture.detectChanges();

      expect(component.mobile).toBe('+91123456');
      expect(component.enternumber).toHaveBeenCalled();
    });

    it('should call greeting on click', () => {
      spyOn(component, 'greeting');
      const btn = fixture.debugElement.queryAll(By.css('button'))[0].nativeElement;
      btn.click();
      expect(component.greeting).toHaveBeenCalled();
    });

    it('should change fruit when select.change is triggered', () => {
      spyOn(component, 'fruits');
      const selectEl = fixture.debugElement.query(By.css('select')).nativeElement;
      selectEl.value = selectEl.options[2].value;  // e.g. "Strawberry"
      selectEl.dispatchEvent(new Event('change'));
      fixture.detectChanges();

      expect(component.fruits).toHaveBeenCalled();
    });

    it('should show alerts for typing()', () => {
      spyOn(window, 'alert');
      const input = fixture.debugElement.query(By.css('input[placeholder="enter name"]')).nativeElement;
      input.dispatchEvent(new KeyboardEvent('keyup'));
      expect(window.alert).toHaveBeenCalledWith('Typing.........');
    });
  });
});
