import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDisComponent } from './form-dis.component';

describe('FormDisComponent', () => {
  let component: FormDisComponent;
  let fixture: ComponentFixture<FormDisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDisComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
