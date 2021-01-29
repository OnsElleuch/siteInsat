import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabosComponent } from './labos.component';

describe('LabosComponent', () => {
  let component: LabosComponent;
  let fixture: ComponentFixture<LabosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
