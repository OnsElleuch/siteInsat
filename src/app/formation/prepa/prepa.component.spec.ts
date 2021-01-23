import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaComponent } from './prepa.component';

describe('PrepaComponent', () => {
  let component: PrepaComponent;
  let fixture: ComponentFixture<PrepaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
