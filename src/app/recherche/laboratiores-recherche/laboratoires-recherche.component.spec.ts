import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoiresRechercheComponent } from './laboratoires-recherche.component';

describe('LabosComponent', () => {
  let component: LaboratoiresRechercheComponent;
  let fixture: ComponentFixture<LaboratoiresRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaboratoiresRechercheComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoiresRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
