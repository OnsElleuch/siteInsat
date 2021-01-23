import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioChComponent } from './bio-ch.component';

describe('BioChComponent', () => {
  let component: BioChComponent;
  let fixture: ComponentFixture<BioChComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BioChComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioChComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
