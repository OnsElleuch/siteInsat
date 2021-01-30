import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationComplementaireLmdComponent } from './formation-complementaire-lmd.component';

describe('FormationComplementaireLmdComponent', () => {
  let component: FormationComplementaireLmdComponent;
  let fixture: ComponentFixture<FormationComplementaireLmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormationComplementaireLmdComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationComplementaireLmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
