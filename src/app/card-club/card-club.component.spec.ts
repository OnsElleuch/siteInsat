import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardClubComponent } from './card-club.component';

describe('CardClubComponent', () => {
  let component: CardClubComponent;
  let fixture: ComponentFixture<CardClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
