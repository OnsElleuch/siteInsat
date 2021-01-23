import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenmentsComponent } from './evenments.component';

describe('EvenmentsComponent', () => {
  let component: EvenmentsComponent;
  let fixture: ComponentFixture<EvenmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
