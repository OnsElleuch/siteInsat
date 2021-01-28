import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierMissionStageComponent } from './dossier-mission-stage.component';

describe('DossierMissionStageComponent', () => {
  let component: DossierMissionStageComponent;
  let fixture: ComponentFixture<DossierMissionStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DossierMissionStageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DossierMissionStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
