import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngComponent } from './ing.component';

describe('IngComponent', () => {
  let component: IngComponent;
  let fixture: ComponentFixture<IngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
