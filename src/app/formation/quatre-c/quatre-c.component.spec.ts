import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuatreCComponent } from './quatre-c.component';

describe('QuatreCComponent', () => {
  let component: QuatreCComponent;
  let fixture: ComponentFixture<QuatreCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuatreCComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuatreCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
