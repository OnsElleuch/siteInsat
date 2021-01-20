import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfMathComponent } from './inf-math.component';

describe('InfMathComponent', () => {
  let component: InfMathComponent;
  let fixture: ComponentFixture<InfMathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfMathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
