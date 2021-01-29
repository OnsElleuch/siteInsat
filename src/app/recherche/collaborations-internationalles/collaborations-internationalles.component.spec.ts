import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationsInternationallesComponent } from './collaborations-internationalles.component';

describe('CollaborationsInternationallesComponent', () => {
  let component: CollaborationsInternationallesComponent;
  let fixture: ComponentFixture<CollaborationsInternationallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollaborationsInternationallesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborationsInternationallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
