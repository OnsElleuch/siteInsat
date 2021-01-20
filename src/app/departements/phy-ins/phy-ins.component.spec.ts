import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhyInsComponent } from './phy-ins.component';

describe('PhyInsComponent', () => {
  let component: PhyInsComponent;
  let fixture: ComponentFixture<PhyInsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhyInsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhyInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
