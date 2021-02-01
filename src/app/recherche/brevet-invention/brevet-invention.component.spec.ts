import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrevetInventionComponent } from './brevet-invention.component';

describe('BrevetInventionComponent', () => {
  let component: BrevetInventionComponent;
  let fixture: ComponentFixture<BrevetInventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrevetInventionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrevetInventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
