import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotDossierTheseComponent } from './depot-dossier-these.component';

describe('DepotDossierTheseComponent', () => {
  let component: DepotDossierTheseComponent;
  let fixture: ComponentFixture<DepotDossierTheseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepotDossierTheseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotDossierTheseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
