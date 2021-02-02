import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTemplateComponent } from './news-template.component';

describe('NewsTemplateComponent', () => {
  let component: NewsTemplateComponent;
  let fixture: ComponentFixture<NewsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
