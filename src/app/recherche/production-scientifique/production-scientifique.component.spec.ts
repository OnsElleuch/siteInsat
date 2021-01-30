import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionScientifiqueComponent } from './production-scientifique.component';

describe('ProductionScientifiqueComponent', () => {
  let component: ProductionScientifiqueComponent;
  let fixture: ComponentFixture<ProductionScientifiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductionScientifiqueComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionScientifiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
