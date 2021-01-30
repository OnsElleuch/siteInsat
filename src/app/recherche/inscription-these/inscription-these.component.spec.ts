import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionTheseComponent } from './inscription-these.component';

describe('InscriptionTheseComponent', () => {
  let component: InscriptionTheseComponent;
  let fixture: ComponentFixture<InscriptionTheseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InscriptionTheseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionTheseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
