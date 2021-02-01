import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationsExternesComponent } from './relations-externes.component';

describe('RelationsExternesComponent', () => {
  let component: RelationsExternesComponent;
  let fixture: ComponentFixture<RelationsExternesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelationsExternesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationsExternesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
