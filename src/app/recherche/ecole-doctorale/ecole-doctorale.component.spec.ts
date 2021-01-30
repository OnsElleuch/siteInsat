import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoleDoctoraleComponent } from './ecole-doctorale.component';

describe('EcoleDoctoraleComponent', () => {
  let component: EcoleDoctoraleComponent;
  let fixture: ComponentFixture<EcoleDoctoraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EcoleDoctoraleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoleDoctoraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
