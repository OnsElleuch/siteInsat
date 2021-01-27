import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubTemplateComponent } from './club-template.component';

describe('ClubTemplateComponent', () => {
  let component: ClubTemplateComponent;
  let fixture: ComponentFixture<ClubTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
